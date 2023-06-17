"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UserIcon = _ref => {
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
    d: "M19.75 20.275C19.7513 20.3738 19.7329 20.4719 19.6957 20.5635C19.6585 20.6551 19.6032 20.7384 19.5333 20.8083C19.4634 20.8782 19.3802 20.9334 19.2886 20.9706C19.197 21.0078 19.0989 21.0263 19 21.025H5C4.80109 21.025 4.61038 20.946 4.46973 20.8053C4.32907 20.6646 4.25 20.4739 4.25 20.275C4.25 16.475 8.42 13.525 12 13.525C15.58 13.525 19.75 16.475 19.75 20.275Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 11.575C14.3748 11.575 16.3 9.64973 16.3 7.2749C16.3 4.90008 14.3748 2.97491 12 2.97491C9.62518 2.97491 7.69995 4.90008 7.69995 7.2749C7.69995 9.64973 9.62518 11.575 12 11.575Z",
    fill: "currentColor"
  }));
};
var _default = UserIcon;
exports.default = _default;