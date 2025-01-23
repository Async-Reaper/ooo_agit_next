import * as React from "react";
import { SVGAttributes } from "react";

export const BurgerIcon = React.memo(
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
          d="M3.75 6.5h16a.75.75 0 000-1.5h-16a.75.75 0 000 1.5m0 6h16a.75.75 0 000-1.5h-16a.75.75 0 000 1.5m0 6h16a.75.75 0 000-1.5h-16a.75.75 0 000 1.5"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);
