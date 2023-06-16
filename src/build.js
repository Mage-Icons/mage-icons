const { buildReactIcons } = require('./scripts/build.react');

main();

async function main() {
  try {
    await buildReactIcons();
  } catch(e) {
    console.error(e);
  }
}










/*
// const cliProgress = require('cli-progress');
// const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
// // start the progress bar with a total value of 200 and start value of 0
// bar1.start(200, 0);
// setTimeout(() => {
//   // update the current value in your application..
//   bar1.update(100);
//   // stop the progress bar
//   bar1.stop();
// }, 1000);
*/
