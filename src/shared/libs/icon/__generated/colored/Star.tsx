import * as React from "react";
import { SVGAttributes } from "react";

export const StarIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#star_svg__a)">
          <path
            fill="#506BD1"
            d="M15.495 5.78l-5.03-.425L8.508.703A.55.55 0 008 .362a.54.54 0 00-.508.341L5.535 5.355l-5.03.425a.55.55 0 00-.48.378.57.57 0 00.166.591l3.812 3.296-1.145 4.91a.56.56 0 00.213.573.56.56 0 00.609.027L8 12.943l4.32 2.612a.54.54 0 00.286.083.6.6 0 00.323-.101.54.54 0 00.213-.572l-1.145-4.911 3.812-3.296a.57.57 0 00.166-.59.54.54 0 00-.48-.388m-4.477 3.655a.55.55 0 00-.175.545l.923 3.96-3.48-2.105a.54.54 0 00-.572 0l-3.48 2.105.923-3.96a.55.55 0 00-.175-.545L1.908 6.777l4.052-.342a.55.55 0 00.462-.332L8 2.346l1.578 3.748a.53.53 0 00.462.332l4.052.342z"
          />
        </g>
        <defs>
          <clipPath id="star_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
