const fs = require('fs');

const buildSVG = (version) => {
  console.log("Building SVG pack");
  const bulkSourcePath = './svg/bulk';
  const strokeSourcePath = './svg/stroke';
  const readMeSourcePath = './readme.md';
  const licenseSourcePath = './License.txt';

  const bulkBuildPath = './bin/svg/bulk';
  const storkeBuildPath = './bin/svg/stroke';
  const readMeBuildPath = './bin/svg/readme.md';
  const licenseBuildPath = './bin/svg/License.txt';

  fs.cpSync(bulkSourcePath, bulkBuildPath, {recursive: true});
  fs.cpSync(strokeSourcePath, storkeBuildPath, {recursive: true});
  fs.cpSync(licenseSourcePath, licenseBuildPath, {recursive: true});

  const readMe = fs.readFileSync(readMeSourcePath).toString('utf-8');
  const updatedReadMe = readMe.replace('# Mage Icons', '# Mage Icons v' + version);
  fs.writeFileSync(readMeBuildPath, updatedReadMe);

  console.log("SVG Pack built successfully");
};

module.exports = { buildSVG };