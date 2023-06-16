
const replaceStrokeColor = (svgString) => {
  return svgString.replaceAll('stroke="black"', 'stroke="currentColor"');
};

const replaceFillColor = (svgString) => {
  return svgString.replaceAll('fill="black"', 'fill="currentColor"');
};

module.exports = { replaceStrokeColor, replaceFillColor };