"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VolumeIcon = _ref => {
  let {
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.59839 14.0468V9.96318C4.59839 9.55704 4.73747 9.16753 4.98503 8.88035C5.2326 8.59316 5.56836 8.43182 5.91847 8.43182H7.76659C7.99808 8.43071 8.22541 8.36039 8.42663 8.22764L12.3077 5.65495C12.5082 5.52303 12.735 5.45432 12.9655 5.45565C13.196 5.45697 13.4222 5.5283 13.6215 5.66252C13.8209 5.79674 13.9865 5.98918 14.1018 6.2207C14.2172 6.45222 14.2783 6.71473 14.279 6.98213V17.0279C14.2783 17.2953 14.2172 17.5578 14.1018 17.7893C13.9865 18.0208 13.8209 18.2133 13.6215 18.3475C13.4222 18.4817 13.196 18.553 12.9655 18.5544C12.735 18.5557 12.5082 18.487 12.3077 18.355L8.42663 15.7824C8.22541 15.6496 7.99808 15.5793 7.76659 15.5782H5.91847C5.56836 15.5782 5.2326 15.4168 4.98503 15.1297C4.73747 14.8425 4.59839 14.453 4.59839 14.0468Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.5329 15.6372C18.5129 14.6572 19.0636 13.3279 19.0636 11.9418C19.0636 10.5558 18.513 9.22647 17.5328 8.24634",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
  }));
};
var _default = VolumeIcon;
exports.default = _default;