const { convertCSVtoObject } = require("../utils/csv.utils");
const fs = require("fs");
const { capitalCamelCase } = require("../utils/name.util");
const { replaceStrokeColor } = require("../utils/svg.utils");
const cliProgress = require('cli-progress');

const buildStrokeIcons = (icon, buildPath, template) => {
  const filePath = `./svg/stroke/${icon.fileName}.svg`;
  const reactIconName = `${capitalCamelCase(icon.fileName)}Icon`;
  icon.reactIconName = `${reactIconName}.jsx`;

  const svgString = fs.readFileSync(filePath).toString("utf-8");
  const rebuildSVG = replaceStrokeColor(svgString).replace('xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" className={className}');

  let reactIconData = template.replaceAll("$template", reactIconName);
  reactIconData = reactIconData.replaceAll("$body", rebuildSVG);
  fs.writeFileSync(`${buildPath}/${reactIconName}.jsx`, reactIconData);
}

const buildReactIcons = async () => {
  const strokeIconsList = await convertCSVtoObject("./svg/stroke.registry.csv");
  const bulkIconList = await convertCSVtoObject("./svg/bulk.registry.csv"); 

  const template = fs
    .readFileSync("./templates/react/template.jsx")
    .toString("utf-8");

  const strokeBuildPath = "./build/react/icons/stroke";
  const fileListPath = "./build/react/iconList.json";

  const reactBuildProgress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  let progress = 0;
  reactBuildProgress.start(strokeIconsList.length);

  for (const icon of strokeIconsList) {
    buildStrokeIcons(icon, strokeBuildPath, template);
    progress++;
    reactBuildProgress.update(progress);
  }
  fs.writeFileSync(fileListPath, JSON.stringify({
    stroke: strokeIconsList,
    bulk: bulkIconList,
  }));
  reactBuildProgress.stop();
};

module.exports = { buildReactIcons };
