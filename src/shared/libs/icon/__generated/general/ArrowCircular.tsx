import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowCircularIcon = React.memo(
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
          d="M12.445 10.263l1.57 1.867a.424.424 0 00.673.003.64.64 0 00-.002-.8L12.3 8.499a.424.424 0 00-.672-.003L9.26 11.312a.64.64 0 00.003.8.424.424 0 00.672.002l1.56-1.855.028 9.94c0 .312.214.566.476.567.263 0 .475-.251.474-.563z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          d="M3 12a9 9 0 005.885 8.446v-.742A8.31 8.31 0 0112 3.692a8.308 8.308 0 013.115 16.012v.742A9 9 0 103 12"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);
