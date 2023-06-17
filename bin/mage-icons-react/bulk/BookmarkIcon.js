"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BookmarkIcon = _ref => {
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
    d: "M18.285 6.1651V19.5251C18.2853 19.7726 18.216 20.0151 18.085 20.2251C17.9669 20.4103 17.8044 20.563 17.6124 20.6695C17.4203 20.776 17.2047 20.8329 16.985 20.8351H16.835C16.5945 20.8068 16.3664 20.7135 16.175 20.5651L11.9451 17.1851L7.77502 20.5151C7.59013 20.6615 7.36888 20.7548 7.13501 20.7851C6.9011 20.8164 6.66313 20.7853 6.44507 20.6951C6.22723 20.5977 6.03786 20.4462 5.89502 20.2551C5.75689 20.0608 5.67396 19.8327 5.65503 19.5951V6.1651C5.65503 5.36945 5.97108 4.60637 6.53369 4.04376C7.0963 3.48115 7.85938 3.1651 8.65503 3.1651H15.345C16.1407 3.1651 16.9038 3.48115 17.4664 4.04376C18.029 4.60637 18.345 5.36945 18.345 6.1651H18.285Z",
    fill: "currentColor"
  }));
};
var _default = BookmarkIcon;
exports.default = _default;