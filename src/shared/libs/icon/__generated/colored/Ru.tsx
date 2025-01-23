import * as React from "react";
import { SVGAttributes } from "react";

export const RuIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#ru_svg__a)">
          <path
            fill="#fff"
            d="M1.317 0h21.361c.726 0 1.318.85 1.318 1.894V12H0V1.894C0 .85.591 0 1.317 0"
          />
          <path
            fill="#D52B1E"
            d="M0 12h24v10.106C24 23.15 23.409 24 22.683 24H1.317C.591 24 0 23.144 0 22.106z"
          />
          <path fill="#0039A6" d="M0 8h24v8H0z" />
          <path
            stroke="#CCC"
            strokeMiterlimit={2.613}
            strokeWidth={0.12}
            d="M1.317 0h21.361c.726 0 1.318.85 1.318 1.894V22.1c0 1.044-.592 1.894-1.318 1.894H1.318C.59 23.994 0 23.138 0 22.1V1.894C0 .85.591 0 1.317 0z"
          />
        </g>
        <defs>
          <clipPath id="ru_svg__a">
            <rect width={24} height={24} fill="#fff" rx={12} />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
