import * as React from "react";
import { SVGAttributes } from "react";

export const EmailIcon = React.memo(
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
          fill="#61C7BB"
          d="M3.224 5.013A11.2 11.2 0 001.23 9.626a11.1 11.1 0 00.233 4.996A11.3 11.3 0 003.88 19.04l1.133-.941a9.86 9.86 0 01-2.109-3.858A9.7 9.7 0 012.7 9.879c.265-1.451.786-2.85 1.666-4.052z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          d="M6.969 5.811l-.697.697V17.66l.697.697h15.334L23 17.66V6.508l-.697-.697zm.697 2.273v8.88h13.94v-8.88l-6.97 6.336zM20.5 7.205H8.772l5.864 5.331z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);
