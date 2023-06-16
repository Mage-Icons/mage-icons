const { buildReactIcons } = require('./scripts/build.react');

main();

async function main() {
  try {
    await buildReactIcons();
  } catch(e) {
    console.error(e);
  }
}