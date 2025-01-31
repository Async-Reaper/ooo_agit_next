import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowLeftIcon = React.memo(
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
          fill={color}
          d="M9 6a.9.9 0 01.7.3.967.967 0 010 1.4l-5 5a.967.967 0 01-1.4 0 .967.967 0 010-1.4l5-5A.9.9 0 019 6"
        />
        <path
          fill={color}
          d="M4 11a.9.9 0 01.7.3l5 5a.967.967 0 010 1.4.967.967 0 01-1.4 0l-5-5a.967.967 0 010-1.4.9.9 0 01.7-.3"
        />
        <path
          fill={color}
          d="M4 11h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1"
        />
      </svg>
    );
  }
);
