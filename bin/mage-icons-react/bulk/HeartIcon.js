"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HeartIcon = _ref => {
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
    d: "M20.8442 12.6569C18.4442 17.8469 12.5643 20.5269 12.3143 20.6569C12.218 20.7048 12.1117 20.7288 12.0043 20.7269C11.9 20.7288 11.7969 20.7047 11.7043 20.6569C11.4543 20.5469 5.56425 17.8669 3.17425 12.6569C1.67425 9.40694 2.51425 5.90694 4.17425 4.40694C4.74678 3.92243 5.42528 3.57944 6.15491 3.40572C6.88453 3.232 7.64483 3.23243 8.37427 3.40694C9.85735 3.73799 11.1547 4.63035 11.9943 5.89693C12.84 4.63194 14.1396 3.74046 15.6243 3.40694C16.3536 3.22999 17.1144 3.22836 17.8444 3.40218C18.5745 3.576 19.253 3.92033 19.8243 4.40694C21.5043 5.90694 22.3042 9.40694 20.8442 12.6569Z",
    fill: "currentColor"
  }));
};
var _default = HeartIcon;
exports.default = _default;