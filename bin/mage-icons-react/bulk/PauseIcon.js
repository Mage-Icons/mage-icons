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
    d: "M10.75 7V17C10.75 17.4641 10.5656 17.9092 10.2374 18.2374C9.90924 18.5656 9.46413 18.75 9 18.75H7C6.53668 18.7474 6.09306 18.5622 5.76544 18.2346C5.43782 17.9069 5.25263 17.4633 5.25 17V7C5.25 6.53587 5.43438 6.09076 5.76257 5.76257C6.09076 5.43438 6.53587 5.25 7 5.25H9C9.46413 5.25 9.90924 5.43438 10.2374 5.76257C10.5656 6.09076 10.75 6.53587 10.75 7Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.75 7V17C18.75 17.4641 18.5656 17.9092 18.2374 18.2374C17.9092 18.5656 17.4641 18.75 17 18.75H15C14.5367 18.7474 14.0931 18.5622 13.7654 18.2346C13.4378 17.9069 13.2526 17.4633 13.25 17V7C13.25 6.53587 13.4344 6.09076 13.7626 5.76257C14.0908 5.43438 14.5359 5.25 15 5.25H17C17.4641 5.25 17.9092 5.43438 18.2374 5.76257C18.5656 6.09076 18.75 6.53587 18.75 7Z",
    fill: "currentColor"
  }));
};
var _default = PauseIcon;
exports.default = _default;