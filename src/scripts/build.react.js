const { convertCSVtoObject } = require("../utils/csv.utils");
const fs = require("fs");
const { capitalCamelCase } = require("../utils/name.util");
const { replaceStrokeColor, replaceFillColor } = require("../utils/svg.utils");
const cliProgress = require("cli-progress");

const buildIcons = (icon, buildPath, sourcePath, template, svgBuilder) => {
  const filePath = `${sourcePath}/${icon.fileName}.svg`;
  const reactIconName = `${capitalCamelCase(icon.fileName)}Icon`;
  icon.reactIconName = reactIconName;
  icon.reactIconPath = `${reactIconName}.jsx`;

  const svgString = fs.readFileSync(filePath).toString("utf-8");
  const rebuildSVG = svgBuilder(svgString).replace(
    'xmlns="http://www.w3.org/2000/svg"',
    'xmlns="http://www.w3.org/2000/svg" className={className}'
  );

  let reactIconData = template.replaceAll("$template", reactIconName);
  reactIconData = reactIconData.replaceAll("$body", rebuildSVG);
  fs.writeFileSync(`${buildPath}/${reactIconName}.jsx`, reactIconData);
};

const buildReactIcons = async () => {
  const strokeIconsList = await convertCSVtoObject("./svg/stroke.registry.csv");
  const bulkIconList = await convertCSVtoObject("./svg/bulk.registry.csv");

  const template = fs
    .readFileSync("./templates/react/template.jsx")
    .toString("utf-8");

  const strokeBuildPath = "./build/react/icons/stroke";
  const bulkBuildPath = "./build/react/icons/bulk";
  const fileListPath = "./build/react/iconList.json";

  const reactBuildProgress = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  let progress = 0;
  reactBuildProgress.start(strokeIconsList.length + (bulkIconList.length??0));

  for (const icon of strokeIconsList) {
    buildIcons(icon, strokeBuildPath, './svg/stroke', template, replaceStrokeColor);
    progress++;
    reactBuildProgress.update(progress);
  }

  for (const icon of bulkIconList) {
    buildIcons(icon, bulkBuildPath, './svg/bulk', template, replaceFillColor);
    progress++;
    reactBuildProgress.update(progress);
  }

  // for()

  const strokeIndexPath = "./build/react/icons/stroke/index.jsx";
  const bulkIndexpath = "./build/react/icons/bulk/index.jsx";
  const indexTemplate = fs
    .readFileSync("./templates/react/indexTemplate.jsx")
    .toString("utf-8");

  let strokeIndexString = "";
  for(const icon of strokeIconsList) {
    strokeIndexString = strokeIndexString + indexTemplate.replaceAll("$template", icon.reactIconName) + "\n";
  }

  let bulkIndexString = "";
  for(const icon of bulkIconList) {
    bulkIndexString = bulkIndexString + indexTemplate.replaceAll("$template", icon.reactIconName) +  "\n";
  }

  fs.writeFileSync(strokeIndexPath, strokeIndexString);
  fs.writeFileSync(bulkIndexpath, bulkIndexString);

  fs.writeFileSync(
    fileListPath,
    JSON.stringify({
      stroke: strokeIconsList,
      bulk: bulkIconList,
    })
  );
  reactBuildProgress.stop();
};

module.exports = { buildReactIcons };
