"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HeartIcon = _ref => {
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
    d: "M12 7.78032C10.3391 4.01944 6.47526 3.68514 4.67598 5.3253C3.21118 6.64161 2.50762 9.79656 3.84554 12.7008C6.15231 17.6944 12 20.3166 12 20.3166C12 20.3166 17.8477 17.6944 20.1544 12.7008C21.4924 9.79656 20.7888 6.64161 19.324 5.3253C17.5247 3.68514 13.6609 4.01944 12 7.78032Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = HeartIcon;
exports.default = _default;