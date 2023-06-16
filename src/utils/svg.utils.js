
const replaceStrokeColor = (svgString) => {
  return svgString.replaceAll('stroke="black"', 'stroke="currentColor"');
};

const replaceFillColor = (svgString) => {
  return svgString.replaceAll('fill="black"', 'stroke="currentColor"');
};

module.exports = { replaceStrokeColor, replaceFillColor };