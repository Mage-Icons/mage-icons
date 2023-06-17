"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MinusIcon = _ref => {
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
    d: "M19.195 12.75H4.80499C4.60608 12.75 4.41537 12.671 4.27472 12.5303C4.13407 12.3897 4.05499 12.1989 4.05499 12C4.05499 11.8011 4.13407 11.6103 4.27472 11.4697C4.41537 11.329 4.60608 11.25 4.80499 11.25H19.195C19.3939 11.25 19.5846 11.329 19.7253 11.4697C19.8659 11.6103 19.945 11.8011 19.945 12C19.945 12.1989 19.8659 12.3897 19.7253 12.5303C19.5846 12.671 19.3939 12.75 19.195 12.75Z",
    fill: "currentColor"
  }));
};
var _default = MinusIcon;
exports.default = _default;