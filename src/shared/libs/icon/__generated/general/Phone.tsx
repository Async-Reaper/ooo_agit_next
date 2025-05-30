import * as React from "react";
import { SVGAttributes } from "react";

export const PhoneIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#phone_svg__a)">
          <path
            fill={color}
            d="M20.217.007l.25.05c.61.141 1.407.46 2.09 1.025C23.352 1.74 24 2.738 24 4.146v15.747l-.006.037c-.102.665-.406 1.655-.998 2.492-.6.847-1.53 1.579-2.862 1.579H3.825l-.04-.007a5.2 5.2 0 01-2.342-1.076C.648 22.261 0 21.262 0 19.855V3.845l.002-.02c.053-.634.302-1.57.89-2.361C1.495.653 2.454 0 3.866 0h16.31zM10.35 6.376c-.745-1.333-2.614-1.49-3.787-.318-.704.704-1.252 1.566-1.289 2.52-.06 1.606.346 4.333 3.081 7.069 2.736 2.734 5.462 3.14 7.068 3.08.954-.037 1.817-.584 2.521-1.288 1.172-1.173 1.014-3.043-.319-3.788l-.979-.546c-.883-.492-2.04-.294-2.817.482 0 0-.943.94-2.65-.766-1.686-1.687-.786-2.627-.765-2.648.776-.776.974-1.936.482-2.819z"
          />
        </g>
        <defs>
          <clipPath id="phone_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
