"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function speedSwitch(speed) {
  if (speed === "fast") return 600;
  if (speed === "slow") return 900;
  return 750;
}

var Spinner = function Spinner(_ref) {
  var color = _ref.color,
      speed = _ref.speed,
      gap = _ref.gap,
      thickness = _ref.thickness,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["color", "speed", "gap", "thickness", "size"]);

  return _react2.default.createElement(
    "svg",
    _extends({
      height: size,
      width: size
    }, props, {
      style: { animationDuration: speedSwitch(speed) + "ms" },
      className: "__react-svg-spinner_circle",
      role: "img",
      "aria-labelledby": "title desc",
      viewBox: "0 0 32 32"
    }),
    _react2.default.createElement(
      "title",
      { id: "title" },
      "Circle loading spinner"
    ),
    _react2.default.createElement(
      "desc",
      { id: "desc" },
      "Image of a partial circle indicating \"loading.\""
    ),
    _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: "\n      .__react-svg-spinner_circle{\n          transition-property: transform;\n          animation-name: __react-svg-spinner_infinite-spin;\n          animation-iteration-count: infinite;\n          animation-timing-function: linear;\n      }\n      @keyframes __react-svg-spinner_infinite-spin {\n          from {transform: rotate(0deg)}\n          to {transform: rotate(360deg)}\n      }\n    " } }),
    _react2.default.createElement("circle", {
      role: "presentation",
      cx: 16,
      cy: 16,
      r: 14 - thickness / 2,
      stroke: color,
      fill: "none",
      strokeWidth: thickness,
      strokeDasharray: Math.PI * 2 * (11 - gap),
      strokeLinecap: "round"
    })
  );
};
Spinner.propTypes = {
  color: _propTypes2.default.string,
  thickness: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8]).isRequired,
  gap: _propTypes2.default.oneOf([1, 2, 3, 4, 5]).isRequired,
  speed: _propTypes2.default.oneOf(["fast", "slow"]),
  size: _propTypes2.default.string.isRequired
};
Spinner.defaultProps = {
  color: "rgba(0,0,0,0.4)",
  gap: 4,
  thickness: 4,
  size: "1em"
};

module.exports = Spinner;