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
          d="M18.307 2.612A8.9 8.9 0 0012 0C9.717 0 7.434.87 5.693 2.612 2.917 5.388 2.194 9.622 4 12.872 6.074 16.599 12 24 12 24s5.926-7.401 8-11.128c1.806-3.25 1.083-7.484-1.693-10.26M12 14.336a5.417 5.417 0 110-10.834 5.417 5.417 0 010 10.834"
        />
      </svg>
    );
  }
);
