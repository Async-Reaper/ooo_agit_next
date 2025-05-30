import * as React from "react";
import { SVGAttributes } from "react";

export const ManagerIcon = React.memo(
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
          d="M11.22 8.902a5.02 5.02 0 001.817-3.865A5.043 5.043 0 008 0a5.04 5.04 0 00-5.037 5.037c0 1.553.708 2.942 1.818 3.865A5.04 5.04 0 000 13.926v1.482c0 .327.265.592.593.592h14.814a.593.593 0 00.593-.592v-1.482a5.04 5.04 0 00-4.78-5.024M4.147 5.037A3.856 3.856 0 018 1.185a3.857 3.857 0 013.852 3.852A3.857 3.857 0 018 8.889a3.856 3.856 0 01-3.852-3.852zm10.667 9.778H1.185v-.89a3.856 3.856 0 013.852-3.851h5.926a3.856 3.856 0 013.852 3.852v.889z"
        />
      </svg>
    );
  }
);
