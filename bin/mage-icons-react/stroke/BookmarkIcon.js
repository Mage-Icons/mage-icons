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
    d: "M11.6548 16.4742L7.33438 19.9261C7.25547 19.989 7.16095 20.0293 7.06092 20.0426C6.96089 20.0559 6.85912 20.0418 6.76648 20.0018C6.67384 19.9618 6.59383 19.8973 6.53499 19.8153C6.47615 19.7334 6.4407 19.6369 6.43243 19.5363V6.17419C6.43243 5.58354 6.66707 5.01709 7.08471 4.59944C7.50236 4.18179 8.06882 3.94716 8.65946 3.94716H15.3405C15.9312 3.94716 16.4976 4.18179 16.9153 4.59944C17.3329 5.01709 17.5676 5.58354 17.5676 6.17419V19.5363C17.5671 19.6407 17.5373 19.7429 17.4815 19.8311C17.4258 19.9193 17.3464 19.9901 17.2523 20.0354C17.1583 20.0807 17.0534 20.0986 16.9497 20.0872C16.8459 20.0757 16.7475 20.0353 16.6656 19.9706L12.3452 16.5187C12.2541 16.4307 12.1346 16.3778 12.0082 16.3697C11.8817 16.3615 11.7565 16.3986 11.6548 16.4742Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = BookmarkIcon;
exports.default = _default;