import React from "react"

function speedSwitch(speed) {
	if (speed === "fast") return 600
	if (speed === "slow") return 900
	return 750
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
		style={{animationDuration: `${speedSwitch(speed)}ms`}}
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
      strokeDasharray={Math.PI * 2 * (10 - gap + (thickness / 2))}
      strokeLinecap="round"
    />
  </svg>
Spinner.propTypes = {
  color: React.PropTypes.string,
  thickness: React.PropTypes.oneOf([1,2,3,4,5,6,7,8]).isRequired,
  gap: React.PropTypes.oneOf([1,2,3,4]).isRequired,
  speed: React.PropTypes.oneOf(["fast", "slow"]),
}
Spinner.defaultProps = {
  color: "rgba(0,0,0,0.4)",
  gap: 4,
  thickness: 4,
}

module.exports = Spinner
