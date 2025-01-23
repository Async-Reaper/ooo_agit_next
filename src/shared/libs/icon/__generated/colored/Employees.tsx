import * as React from "react";
import { SVGAttributes } from "react";

export const EmployeesIcon = React.memo(
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
          fillRule="evenodd"
          d="M4 0a2 2 0 00-1.31 3.512A3.85 3.85 0 000 7.185C0 7.635.365 8 .815 8h6.37C7.635 8 8 7.635 8 7.185c0-1.722-1.13-3.18-2.69-3.673A2 2 0 004 0m-.667 2a.667.667 0 111.334 0 .667.667 0 01-1.334 0m3.28 4.667a2.52 2.52 0 00-2.465-2h-.296a2.52 2.52 0 00-2.465 2z"
          clipRule="evenodd"
        />
        <path
          fill="#506BD1"
          fillRule="evenodd"
          d="M12.694 9.732a2.667 2.667 0 10-4.055 0 5.335 5.335 0 00-3.305 4.935v.43c0 .498.404.903.903.903h8.86a.904.904 0 00.903-.904v-.43a5.335 5.335 0 00-3.306-4.934M9.334 8A1.333 1.333 0 1112 8a1.333 1.333 0 01-2.666 0m1.333 2.667a4 4 0 00-4 4h8a4 4 0 00-4-4"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);
