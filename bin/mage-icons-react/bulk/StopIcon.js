"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StopIcon = _ref => {
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
    d: "M16.5 5.25H7.5C6.25736 5.25 5.25 6.25736 5.25 7.5V16.5C5.25 17.7426 6.25736 18.75 7.5 18.75H16.5C17.7426 18.75 18.75 17.7426 18.75 16.5V7.5C18.75 6.25736 17.7426 5.25 16.5 5.25Z",
    fill: "currentColor"
  }));
};
var _default = StopIcon;
exports.default = _default;