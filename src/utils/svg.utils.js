
const replaceStrokeColor = (svgString) => {
  return svgString.replaceAll('stroke="black"', 'stroke="currentColor"');
};

module.exports = { replaceStrokeColor };