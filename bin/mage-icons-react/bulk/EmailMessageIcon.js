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
    d: "M18.345 3.83997H5.65503C4.89467 3.8426 4.1662 4.14581 3.62854 4.68347C3.09088 5.22113 2.78767 5.9496 2.78503 6.70996V17.2899C2.78767 18.0503 3.09088 18.7788 3.62854 19.3164C4.1662 19.8541 4.89467 20.1573 5.65503 20.1599H18.345C19.1053 20.1573 19.8338 19.8541 20.3715 19.3164C20.9091 18.7788 21.2123 18.0503 21.215 17.2899V6.70996C21.2123 5.9496 20.9091 5.22113 20.3715 4.68347C19.8338 4.14581 19.1053 3.8426 18.345 3.83997ZM19.715 8.08997L12.395 12.64C12.2768 12.7099 12.1424 12.7478 12.005 12.75C11.8598 12.7489 11.7178 12.7073 11.595 12.6299L4.28503 7.94995V6.70996C4.2829 6.54882 4.31348 6.38892 4.375 6.23996L12.005 11.11L19.665 6.35995C19.6803 6.47612 19.6803 6.5938 19.665 6.70996L19.715 8.08997Z",
    fill: "currentColor"
  }));
};
var _default = EmailMessageIcon;
exports.default = _default;