"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PlayIcon = _ref => {
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
    d: "M17.9945 11.4711C18.0043 11.7901 17.9399 12.107 17.8062 12.3968C17.6726 12.6866 17.4734 12.9415 17.2245 13.1412L9.22451 19.3511C8.9388 19.5832 8.59093 19.7259 8.22451 19.7611H8.0245C7.71638 19.7639 7.41184 19.6955 7.13454 19.5611C6.79453 19.3969 6.50798 19.1397 6.308 18.8194C6.10803 18.4991 6.00281 18.1287 6.00454 17.7511V6.21116C6.01486 5.85863 6.11463 5.51451 6.29452 5.21116C6.48351 4.9016 6.75316 4.64922 7.07454 4.48112C7.37787 4.30665 7.72507 4.22333 8.07454 4.24113C8.43137 4.25982 8.77667 4.37379 9.07454 4.57114L17.0745 9.90116C17.3401 10.0797 17.5621 10.3155 17.7245 10.5912C17.8794 10.8605 17.9717 11.1612 17.9945 11.4711Z",
    fill: "currentColor"
  }));
};
var _default = PlayIcon;
exports.default = _default;