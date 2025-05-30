import * as React from "react";
import { SVGAttributes } from "react";

export const EnIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        fill="none"
        {...props}
      >
        <g clipPath="url(#en_svg__a)">
          <rect
            width={24}
            height={24}
            fill="url(#en_svg__b)"
            rx={12}
            transform="matrix(1 0 0 -1 0 24)"
          />
        </g>
        <defs>
          <clipPath id="en_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
          <pattern
            id="en_svg__b"
            width={1}
            height={1}
            patternContentUnits="objectBoundingBox"
          >
            <use
              xlinkHref="#en_svg__c"
              transform="translate(-.497) scale(.0052)"
            />
          </pattern>
          <image
            xlinkHref="data:image/png;base64,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"
            id="en_svg__c"
            width={383}
            height={192}
          />
        </defs>
      </svg>
    );
  }
);
