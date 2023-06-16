"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageIcon = _ref => {
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
    d: "M20.5414 7.85615V13.9571C20.5414 14.4379 20.4467 14.9139 20.2627 15.358C20.0788 15.8021 19.8091 16.2056 19.4692 16.5456C19.1293 16.8855 18.7258 17.1551 18.2816 17.3391C17.8375 17.523 17.3615 17.6177 16.8808 17.6177H14.4404L12.4271 19.6311C12.3723 19.6894 12.3061 19.7359 12.2327 19.7677C12.1592 19.7995 12.08 19.8159 12 19.8159C11.92 19.8159 11.8408 19.7995 11.7673 19.7677C11.6939 19.7359 11.6277 19.6894 11.5729 19.6311L9.55961 17.6177H7.11921C6.14836 17.6177 5.21728 17.2321 4.53078 16.5456C3.84429 15.8591 3.45862 14.928 3.45862 13.9571V7.85615C3.45862 6.8853 3.84429 5.95421 4.53078 5.26772C5.21728 4.58123 6.14836 4.19556 7.11921 4.19556H16.8808C17.8516 4.19556 18.7827 4.58123 19.4692 5.26772C20.1557 5.95421 20.5414 6.8853 20.5414 7.85615Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = MessageIcon;
exports.default = _default;