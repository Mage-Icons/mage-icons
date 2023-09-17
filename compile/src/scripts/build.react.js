const { convertCSVtoObject } = require("../utils/csv.utils");
const fs = require("fs");
const { capitalCamelCase } = require("../utils/name.util");
const { replaceStrokeColor, replaceFillColor } = require("../utils/svg.utils");
const cliProgress = require("cli-progress");
const pjson = require("../../../package.json");

const buildIcons = (icon, buildPath, sourcePath, template, svgBuilder) => {
  const filePath = `${sourcePath}/${icon.fileName}.svg`;
  const reactIconName = `${capitalCamelCase(icon.fileName)}Icon`;
  icon.reactIconName = reactIconName;
  icon.reactIconPath = `${reactIconName}.jsx`;

  const svgString = fs.readFileSync(filePath).toString("utf-8");
  let rebuildSVG = svgString;

  if(svgBuilder) {
    rebuildSVG = svgBuilder(svgString);
  }

  icon.svg = rebuildSVG;
  rebuildSVG = rebuildSVG.replace(
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
  const socialBWIconList = await convertCSVtoObject("./svg/social-bw.registry.csv");
  const socialColorIconList = await convertCSVtoObject("./svg/social-color.registry.csv");

  const template = fs
    .readFileSync("./compile/templates/react/template.jsx")
    .toString("utf-8");

  const strokeBuildPath = "./bin/mage-icons-react/src/stroke";
  const bulkBuildPath = "./bin/mage-icons-react/src/bulk";
  const socialBWBuildPath = "./bin/mage-icons-react/src/social-bw";
  const socialColorBuildPath = "./bin/mage-icons-react/src/social-color";
  const fileListPath = "./bin/mage-icons-react/index.js";
  const versionFile = "./bin/mage-icons-react/version.txt";

  const reactBuildProgress = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  let progress = 0;
  reactBuildProgress.start(strokeIconsList.length + (bulkIconList.length ?? 0) + socialBWIconList?.length + socialColorIconList?.length);

  try {
    // Build stroke icons
    for (const icon of strokeIconsList) {
      buildIcons(
        icon,
        strokeBuildPath,
        "./svg/stroke",
        template,
        replaceStrokeColor
      );
      progress++;
      reactBuildProgress.update(progress);
    }
  
    // Build bulk icons
    for (const icon of bulkIconList) {
      buildIcons(icon, bulkBuildPath, "./svg/bulk", template, replaceFillColor);
      progress++;
      reactBuildProgress.update(progress);
    }

    // Build social bw icons
    for (const icon of socialBWIconList) {
      buildIcons(icon, socialBWBuildPath, "./svg/social-bw", template, replaceFillColor);
      progress++;
      reactBuildProgress.update(progress);
    }

    // Build social color icons
    for (const icon of socialColorIconList) {
      buildIcons(icon, socialColorBuildPath, "./svg/social-color", template);
      progress++;
      reactBuildProgress.update(progress);
    }
  
    const strokeIndexPath = "./bin/mage-icons-react/src/stroke/index.jsx";
    const bulkIndexpath = "./bin/mage-icons-react/src/bulk/index.jsx";
    const socialBWIndexpath = "./bin/mage-icons-react/src/social-bw/index.jsx";
    const socialColorIndexpath = "./bin/mage-icons-react/src/social-color/index.jsx";
    const indexTemplate = fs
      .readFileSync("./compile/templates/react/indexTemplate.jsx")
      .toString("utf-8");
    const mageIconListTemplate = fs
      .readFileSync("./compile/templates/react/iconListTemplate.js")
      .toString("utf-8");
  
    // build stroke index
    let strokeIndexString = "";
    for (const icon of strokeIconsList) {
      strokeIndexString =
        strokeIndexString +
        indexTemplate.replaceAll("$template", icon.reactIconName) +
        "\n";
    }
  
    // build bulk index
    let bulkIndexString = "";
    for (const icon of bulkIconList) {
      bulkIndexString =
        bulkIndexString +
        indexTemplate.replaceAll("$template", icon.reactIconName) +
        "\n";
    }

    // build social bw index
    let socialBWIndexString = "";
    for (const icon of socialBWIconList) {
      socialBWIndexString =
      socialBWIndexString +
        indexTemplate.replaceAll("$template", icon.reactIconName) +
        "\n";
    }

    // build social color index
    let socialSocialIndexString = "";
    for (const icon of socialColorIconList) {
      socialSocialIndexString =
      socialSocialIndexString +
        indexTemplate.replaceAll("$template", icon.reactIconName) +
        "\n";
    }
  
    fs.writeFileSync(strokeIndexPath, strokeIndexString);
    fs.writeFileSync(bulkIndexpath, bulkIndexString);
    fs.writeFileSync(socialBWIndexpath, socialBWIndexString);
    fs.writeFileSync(socialColorIndexpath, socialSocialIndexString);
  
    fs.writeFileSync(
      fileListPath,
      mageIconListTemplate.replace(
        "$template",
        JSON.stringify({
          stroke: strokeIconsList,
          bulk: bulkIconList,
          socialBW: socialBWIconList,
          socialColor: socialSocialIndexString,
          version: pjson.version,
        })
      )
    );

    fs.writeFileSync(
      versionFile,
      pjson.version,
    );
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    reactBuildProgress.stop();
  }
};

module.exports = { buildReactIcons };
