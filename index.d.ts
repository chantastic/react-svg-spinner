declare module "react-svg-spinner" {
  import React from "react";

  type SpinnerProps = {
    svgId?: string;
    size?: string;
    width?: string;
    height?: string;
    color?: string;
    thickness?: number;
    gap?: number;
    speed?: "fast" | "slow" | "default";
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  };

  class Spinner extends React.Component<SpinnerProps, any> {}

  export default Spinner;
}
