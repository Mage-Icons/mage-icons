"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LocationMapMarkerIcon = _ref => {
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
    d: "M12 12.72C13.6569 12.72 15 11.3769 15 9.71997C15 8.06312 13.6569 6.71997 12 6.71997C10.3431 6.71997 9 8.06312 9 9.71997C9 11.3769 10.3431 12.72 12 12.72Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.0001 3.71997C6.00007 3.71997 5.00007 8.71997 6.00007 12.51C6.88007 15.83 9.52007 18.1 11.2601 19.96C11.3538 20.0631 11.4681 20.1455 11.5955 20.2019C11.7229 20.2583 11.8608 20.2874 12.0001 20.2874C12.1395 20.2874 12.2773 20.2583 12.4047 20.2019C12.5321 20.1455 12.6464 20.0631 12.7401 19.96C14.4801 18.1 17.1201 15.83 18.0001 12.51C19.0001 8.71997 18.0001 3.71997 12.0001 3.71997Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
  }));
};
var _default = LocationMapMarkerIcon;
exports.default = _default;