import * as React from "react";
import { SVGAttributes } from "react";

export const TimeIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <path
          fill="#506BD1"
          d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0 14.77A6.777 6.777 0 011.23 8 6.777 6.777 0 018 1.23 6.777 6.777 0 0114.77 8 6.777 6.777 0 018 14.77m4.308-7.385H8.615V2.52a.615.615 0 10-1.23 0V8c0 .34.275.615.615.615h4.308a.615.615 0 000-1.23"
        />
      </svg>
    );
  }
);
