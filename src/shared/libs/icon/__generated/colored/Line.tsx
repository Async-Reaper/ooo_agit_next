import * as React from "react";
import { SVGAttributes } from "react";

export const LineIcon = React.memo(
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
          d="M2 1c96 137.695 168 225.584 216 263.667 48 38.083 96 42.794 144 14.132 48-28.661 96-23.88 144 14.343s96 58.791 144 61.704c48 2.913 96-35.527 144-115.321 48-79.793 96-98.054 144-54.783s96 73.902 144 91.894c48 17.992 96 16.492 144-4.501 48-20.992 72-51.975 72-92.947"
          stroke="url(#line_svg__paint0_linear_133_350)"
          strokeWidth={3}
        />
        <defs>
          <linearGradient
            id="line_svg__paint0_linear_133_350"
            x1={2}
            y1={178}
            x2={1298}
            y2={178}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#29ECD5" />
            <stop offset={1} stopColor="#3C9F94" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
