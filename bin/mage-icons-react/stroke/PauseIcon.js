"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PauseIcon = _ref => {
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
    d: "M9 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H9C9.55228 18 10 17.5523 10 17V7C10 6.44772 9.55228 6 9 6Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 6H15C14.4477 6 14 6.44772 14 7V17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = PauseIcon;
exports.default = _default;