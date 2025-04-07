import * as React from "react";
import { SVGAttributes } from "react";

export const BagIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#bag_svg__clip0_780_2490)">
          <circle cx={12} cy={12} r={12} fill="#C1EDE8" />
          <g clipPath="url(#bag_svg__clip1_780_2490)">
            <path
              d="M17.766 7.586h-3.29v-.854c0-.73-.554-1.322-1.235-1.322h-2.477c-.682 0-1.236.593-1.236 1.322v.854H6.233c-.452 0-.823.397-.823.881v9.243c0 .484.37.881.823.881h11.533c.453 0 .824-.397.824-.881V8.467c0-.484-.371-.881-.824-.881zm-7.414-.854c0-.243.185-.44.412-.44h2.477c.227 0 .411.197.411.44v.854h-3.3v-.854zM6.234 8.467h11.533v3.089H13.23v-.452c0-.485-.37-.881-.824-.881h-.82c-.454 0-.824.396-.824.881v.452H6.234V8.467zm6.174 4.857h-.822v-2.22h.82l.002 2.22zm-6.174 4.384v-5.271h4.529v.886c0 .486.37.881.823.881h.82c.455 0 .825-.395.825-.88v-.887h4.535v5.271H6.234z"
              fill="#000"
            />
          </g>
        </g>
        <defs>
          <clipPath id="bag_svg__clip0_780_2490">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
          <clipPath id="bag_svg__clip1_780_2490">
            <path
              fill="#fff"
              transform="translate(5.41 5.41)"
              d="M0 0h13.18v13.18H0z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
