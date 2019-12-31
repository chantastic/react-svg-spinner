declare module "react-svg-spinner" {
  import React from "react";

  type SpinnerProps = {
    size?: string;
    width?: string;
    height?: string;
    color?: string;
    thickness?: number;
    gap?: number;
    speed?: "fast" | "slow" | "default";
  };

  class Spinner extends React.Component<SpinnerProps, any> {}

  export default Spinner;
}
