"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EmailMessageIcon = _ref => {
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
    d: "M18.3482 4.59375H5.65172C4.48304 4.59375 3.53564 5.54115 3.53564 6.70983V17.2902C3.53564 18.4589 4.48304 19.4063 5.65172 19.4063H18.3482C19.5169 19.4063 20.4643 18.4589 20.4643 17.2902V6.70983C20.4643 5.54115 19.5169 4.59375 18.3482 4.59375Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.7262 6.70978L12.0001 12L20.3692 6.805",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = EmailMessageIcon;
exports.default = _default;