import * as React from "react";
import { SVGAttributes } from "react";

export const ExportIcoIcon = React.memo(
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
          d="M6.71.117l-4.942 4.8c-.26.252-.075.683.291.683h2.883v6.8c0 .22.184.4.412.4h3.294c.227 0 .412-.18.412-.4V5.6h2.882c.367 0 .55-.431.291-.683L7.292.117a.42.42 0 00-.582 0M13.596 14.4H.404a.4.4 0 00-.404.404v.792c0 .223.177.404.404.404h13.192a.4.4 0 00.404-.404v-.792a.4.4 0 00-.404-.404"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);
