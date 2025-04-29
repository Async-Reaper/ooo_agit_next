import * as React from "react";
import { SVGAttributes } from "react";

export const RhombIcon = React.memo(
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
          fillRule="evenodd"
          d="M3.5 10.5l7-7c0-.5.3-1.5 1.5-1.5s1.5 1 1.5 1.5l7 7c.667 0 1.5.3 1.5 1.5s-.833 1.5-1.5 1.5l-7 7c0 .5-.3 1.5-1.5 1.5s-1.5-1-1.5-1.5l-7-7C3 13.5 2 13.2 2 12s1-1.5 1.5-1.5m8-6l-7 7v1l7 7h1l7-7v-1l-7-7z"
          clipRule="evenodd"
        />
        <circle cx={12} cy={3.5} r={1.5} fill={color} />
        <circle cx={20.5} cy={12} r={1.5} fill={color} />
        <circle cx={3.5} cy={12} r={1.5} fill={color} />
        <circle cx={12} cy={20.5} r={1.5} fill={color} />
      </svg>
    );
  }
);
