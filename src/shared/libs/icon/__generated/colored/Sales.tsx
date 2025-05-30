import * as React from "react";
import { SVGAttributes } from "react";

export const SalesIcon = React.memo(
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
          fill="#506BD1"
          d="M12 0a.8.8 0 00-.8.8v12a.8.8 0 00.8.8h3.2a.8.8 0 00.8-.8V.8a.8.8 0 00-.8-.8zM6.4 3.2a.8.8 0 00-.8.8v8.8a.8.8 0 00.8.8h3.2a.8.8 0 00.8-.8V4a.8.8 0 00-.8-.8zM.8 6.4a.8.8 0 00-.8.8v5.6a.8.8 0 00.8.8H4a.8.8 0 00.8-.8V7.2a.8.8 0 00-.8-.8zM0 15.2a.8.8 0 01.8-.8h14.4a.8.8 0 110 1.6H.8a.8.8 0 01-.8-.8"
        />
      </svg>
    );
  }
);
