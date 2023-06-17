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
    d: "M21.305 7.80508V13.9051C21.3066 14.4813 21.1944 15.0523 20.975 15.5851C20.7384 16.1255 20.3987 16.6146 19.975 17.0251C19.5715 17.4525 19.0849 17.7928 18.545 18.0251C18.0094 18.248 17.4352 18.3635 16.855 18.3651H14.725L12.935 20.1551C12.8122 20.2816 12.6662 20.3835 12.505 20.4551C12.3378 20.528 12.1574 20.5654 11.975 20.5651C11.7916 20.5648 11.6106 20.5238 11.445 20.4451C11.2771 20.3758 11.1268 20.2699 11.005 20.1351L9.22499 18.3651H7.10499C6.52549 18.3664 5.95142 18.2532 5.41578 18.0321C4.88014 17.8109 4.39348 17.4861 3.98372 17.0764C3.57395 16.6666 3.24918 16.1799 3.02803 15.6442C2.80687 15.1086 2.6937 14.5346 2.69502 13.9551V7.85506C2.69502 6.68454 3.15929 5.5618 3.98603 4.73318C4.81278 3.90455 5.93447 3.43773 7.10499 3.43508H16.865C17.4454 3.43319 18.0203 3.54724 18.5561 3.77047C19.0919 3.9937 19.5777 4.32162 19.985 4.73507C20.8089 5.54684 21.2826 6.64866 21.305 7.80508Z",
    fill: "currentColor"
  }));
};
var _default = MessageIcon;
exports.default = _default;