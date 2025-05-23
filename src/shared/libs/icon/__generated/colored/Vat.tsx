import * as React from "react";
import { SVGAttributes } from "react";

export const VatIcon = React.memo(
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
          d="M4.423 16h4.154A4.43 4.43 0 0013 11.577V4.621A4.43 4.43 0 008.577.2H4.423A4.43 4.43 0 000 4.62v6.956A4.43 4.43 0 004.423 16M1.13 4.62a3.295 3.295 0 013.292-3.29h4.154a3.295 3.295 0 013.292 3.29v6.957a3.295 3.295 0 01-3.292 3.291H4.423a3.295 3.295 0 01-3.292-3.291V4.62z"
        />
        <path
          fill="#506BD1"
          d="M3.848 4.157h5.806a.565.565 0 100-1.131H3.848a.565.565 0 100 1.131m0 3.019h5.806a.565.565 0 100-1.132H3.848a.565.565 0 100 1.132m0 3.018h5.806a.565.565 0 100-1.131H3.848a.565.565 0 100 1.13zm0 3.018h3.873a.565.565 0 100-1.13H3.848a.565.565 0 100 1.13"
        />
      </svg>
    );
  }
);
