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
          <mask
            id="book_svg__a"
            width={24}
            height={24}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
          >
            <path fill="#fff" d="M0 0h24v24H0z" />
          </mask>
          <g mask="url(#book_svg__a)">
            <mask
              id="book_svg__b"
              width={24}
              height={24}
              x={0}
              y={0}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
            >
              <path fill="#fff" d="M0 0h24v24H0z" />
            </mask>
            <g mask="url(#book_svg__b)">
              <path
                fill={color}
                d="M16.682 0H4.603A1.475 1.475 0 003.13 1.471V22.53A1.475 1.475 0 004.603 24h14.795a1.475 1.475 0 001.472-1.471V4.55zm.346 2.203l1.837 1.994h-1.836V2.203zm2.605 20.326a.237.237 0 01-.236.236H4.605a.237.237 0 01-.237-.236V1.47a.237.237 0 01.237-.235h11.19v3.58a.62.62 0 00.619.618h3.223v17.095zM6.393 7.133h11.512a.463.463 0 010 .926H6.391a.463.463 0 11.002-.926m11.975 3.556a.464.464 0 01-.464.462H6.394a.463.463 0 110-.926h11.511c.255 0 .463.207.463.464m0 2.739a.464.464 0 01-.464.462H6.394a.463.463 0 110-.925h11.511c.255 0 .463.208.463.463m0 2.738a.465.465 0 01-.464.465H6.394a.464.464 0 010-.927h11.511c.255 0 .463.207.463.462m0 2.78a.464.464 0 01-.464.462H6.394a.462.462 0 110-.925h11.511c.255 0 .463.207.463.462"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="book_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
