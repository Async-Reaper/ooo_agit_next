import * as React from "react";
import { SVGAttributes } from "react";

export const MapIcon = React.memo(
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
          d="M9.82 5.194C6.06 5.194 3 8.21 3 11.911S9.82 24 9.82 24s6.822-8.388 6.822-12.09c0-3.7-3.06-6.716-6.821-6.716m0 11.03c-2.477 0-4.477-1.97-4.477-4.403 0-2.448 2-4.418 4.478-4.418s4.477 1.97 4.477 4.403-2 4.418-4.477 4.418"
          clipRule="evenodd"
        />
        <path
          fill="#61C7BB"
          d="M21.92 14.54c0-2.682-.668-5.322-1.944-7.685A16.3 16.3 0 0014.608 1l-1.305 1.961a13.9 13.9 0 014.59 5.007 13.8 13.8 0 011.662 6.572z"
        />
      </svg>
    );
  }
);
