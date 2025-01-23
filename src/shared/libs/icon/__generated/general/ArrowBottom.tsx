import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowBottomIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#arrow_bottom_svg__a)">
          <path
            fill={color}
            fillOpacity={0.7}
            d="M20.73 7.736l-.65-.65a.92.92 0 00-1.303 0l-6.769 6.683-6.786-6.785a.92.92 0 00-1.302 0l-.65.65a.92.92 0 000 1.302l8.08 8.08a.92.92 0 001.3 0l8.08-7.978a.92.92 0 000-1.302"
          />
        </g>
        <defs>
          <clipPath id="arrow_bottom_svg__a">
            <path fill="#fff" d="M3 3h18v18H3z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
