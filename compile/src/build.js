const { buildReactIcons } = require('./scripts/build.react');
const { buildSVG } = require('./scripts/build.svg');
const version = require("../../package.json").version;

main();

async function main() {
  try {
    const [_, __, platform]  = process.argv;
    
    switch (platform) {
      case 'react':
        await buildReactIcons();
        break;
      case 'svg':
        buildSVG(version);
        break;
      default:
        console.error('Missing build platform');
        process.exit(1);
    }
  } catch(e) {
    console.error(e);
  }
}