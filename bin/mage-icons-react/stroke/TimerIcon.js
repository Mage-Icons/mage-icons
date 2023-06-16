"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TimerIcon = _ref => {
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
    d: "M9.89628 11.5272C7.05973 9.56532 6.09058 3.72675 6.09058 3.72675H17.9096C17.9096 3.72675 16.9404 9.56532 14.1039 11.5272C14.0305 11.5823 13.9709 11.6537 13.9299 11.7357C13.8889 11.8178 13.8675 11.9083 13.8675 12C13.8675 12.0917 13.8889 12.1822 13.9299 12.2643C13.9709 12.3463 14.0305 12.4177 14.1039 12.4728C16.9404 14.4347 17.9096 20.2733 17.9096 20.2733H6.09058C6.09058 20.2733 7.05973 14.4347 9.89628 12.4728C9.96968 12.4177 10.0293 12.3463 10.0703 12.2643C10.1113 12.1822 10.1327 12.0917 10.1327 12C10.1327 11.9083 10.1113 11.8178 10.0703 11.7357C10.0293 11.6537 9.96968 11.5823 9.89628 11.5272Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.63623 17.4388H14.3638",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = TimerIcon;
exports.default = _default;