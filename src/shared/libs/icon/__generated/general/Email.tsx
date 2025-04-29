import * as React from "react";
import { SVGAttributes } from "react";

export const EmailIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <path fill={color} d="M0 4.729l12 9.22 12-9.22V3H0z" />
        <path fill={color} d="M24 5.593l-12 9.22-12-9.22V20h24z" />
      </svg>
    );
  }
);
