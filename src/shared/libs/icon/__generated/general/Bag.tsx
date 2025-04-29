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
        <g clipPath="url(#bag_svg__a)">
          <mask
            id="bag_svg__a"
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
          <g mask="url(#bag_svg__a)">
            <mask
              id="bag_svg__b"
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
            <g mask="url(#bag_svg__b)">
              <path
                fill={color}
                d="M22.5 3.962h-5.991V2.407c0-1.329-1.01-2.407-2.25-2.407H9.75C8.507 0 7.5 1.08 7.5 2.407v1.555h-6c-.824 0-1.5.723-1.5 1.605v16.83c0 .882.674 1.605 1.499 1.605h21c.825 0 1.501-.723 1.501-1.604V5.567c0-.882-.676-1.605-1.5-1.605M9 2.407c0-.442.336-.8.75-.8h4.51c.413 0 .748.358.748.8v1.555H9zm-7.5 3.16h21.001v5.624H14.24v-.823c0-.883-.674-1.604-1.5-1.604h-1.494c-.827 0-1.5.721-1.5 1.604v.823H1.5zm11.243 8.844h-1.497v-4.043h1.493zM1.5 22.394v-9.598h8.248v1.613c0 .885.673 1.604 1.498 1.604h1.493c.829 0 1.503-.719 1.503-1.602v-1.615H22.5v9.598z"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="bag_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
