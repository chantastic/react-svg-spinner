import React from "react";

function speedSwitch(speed) {
  switch (speed) {
    case "fast":
      return 600
    case "slow":
      return 900
    default:
      return 750
  }
}

const Spinner = ({
  color,
  speed,
  gap,
  thickness,
  ...props,
}) =>
  <svg
    {...props}
    className="__react-svg-spinner_circle"
    role="img"
    aria-labelledby="title desc"
    viewBox="0 0 32 32"
  >
    <title id="title">Circle loading spinner</title>
    <desc id="desc">Image of a partial circle indicating "loading."</desc>
    <style dangerouslySetInnerHTML={{__html: `
      .__react-svg-spinner_circle{
          transition-property: transform;
          animation-name: __react-svg-spinner_infinite-spin;
          animation-duration: ${speedSwitch(speed)}ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
      }
      @keyframes __react-svg-spinner_infinite-spin {
          from {transform: rotate(0deg)}
          to {transform: rotate(360deg)}
      }
    `}} />
    <circle
      role="presentation"
      cx={16}
      cy={16}
      r={14 - (thickness / 2)}
      stroke={color}
      fill="none"
      strokeWidth={thickness}
      strokeDasharray={2 * Math.PI * gap}
      strokeLinecap="round"
    />
  </svg>
Spinner.propTypes = {
  color: React.PropTypes.string,
  thickness: React.PropTypes.oneOf([1,2,3,4,5,6,7,8]).isRequired,
  gap: React.PropTypes.oneOf([6,7,8,9]).isRequired,
  speed: React.PropTypes.oneOf(["fast", "slow"]),
}
Spinner.defaultProps = {
  color: "rgba(0,0,0,0.4)",
  gap: 6,
  thickness: 4,
}

export default Spinner
