import * as React from "react";
import { SVGAttributes } from "react";

export const BookIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#book_svg__a)">
          <circle cx={12} cy={12} r={12} fill="#C1EDE8" />
          <g clipPath="url(#book_svg__b)">
            <path
              fill="#000"
              d="M14.571 5.41H7.938a.81.81 0 00-.809.808v11.564a.81.81 0 00.809.808h8.125a.81.81 0 00.808-.808V7.909zm.19 1.21l1.009 1.095h-1.008V6.62zm1.431 11.162a.13.13 0 01-.13.13H7.939a.13.13 0 01-.13-.13V6.218a.13.13 0 01.13-.129h6.145v1.966a.34.34 0 00.34.339h1.77v9.388zM8.921 9.327h6.322a.254.254 0 010 .509H8.92a.254.254 0 010-.509zm6.576 1.953c0 .14-.114.254-.255.254H8.921a.254.254 0 010-.509h6.322c.14 0 .254.114.254.255m0 1.504c0 .14-.114.254-.255.254H8.921a.254.254 0 010-.508h6.322c.14 0 .254.114.254.254m0 1.504c0 .14-.114.255-.255.255H8.921a.254.254 0 010-.509h6.322c.14 0 .254.114.254.254m0 1.526c0 .14-.114.254-.255.254H8.921a.254.254 0 010-.508h6.322c.14 0 .254.114.254.254"
            />
          </g>
        </g>
        <defs>
          <clipPath id="book_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
          <clipPath id="book_svg__b">
            <path fill="#fff" d="M5.41 5.41h13.18v13.18H5.41z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
