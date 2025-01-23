import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowRightIcon = React.memo(
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
          fill="#224472"
          d="M10 12a.6.6 0 01-.467-.2.645.645 0 010-.933l3.334-3.334a.645.645 0 01.933 0 .645.645 0 010 .934L10.467 11.8A.6.6 0 0110 12"
        />
        <path
          fill="#224472"
          d="M13.333 8.667a.6.6 0 01-.466-.2L9.533 5.133a.644.644 0 010-.933.644.644 0 01.934 0L13.8 7.533a.645.645 0 010 .934.6.6 0 01-.467.2"
        />
        <path
          fill="#224472"
          d="M13.333 8.667H2.667C2.267 8.667 2 8.4 2 8s.267-.667.667-.667h10.666c.4 0 .667.267.667.667s-.267.667-.667.667"
        />
      </svg>
    );
  }
);
