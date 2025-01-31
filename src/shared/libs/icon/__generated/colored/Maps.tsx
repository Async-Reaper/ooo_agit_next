import * as React from "react";
import { SVGAttributes } from "react";

export const MapsIcon = React.memo(
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
          fill="url(#maps_svg__a)"
          d="M19.114 2.936A9.96 9.96 0 0012.025 0a9.96 9.96 0 00-7.089 2.936A9.96 9.96 0 002 10.025a9.96 9.96 0 002.936 7.088l.357.357a.488.488 0 10.69-.69l-.357-.357C2.1 12.895 2.1 7.155 5.626 3.627s9.27-3.528 12.797 0 3.528 9.268 0 12.796l-6.398 6.399-2.459-2.46a.489.489 0 00-.69.69l2.804 2.805a.486.486 0 00.69 0l6.744-6.744a9.96 9.96 0 002.936-7.088 9.96 9.96 0 00-2.936-7.089"
        />
        <path
          fill="url(#maps_svg__b)"
          d="M7.086 17.883a.488.488 0 00-.69.69l1.377 1.377a.486.486 0 00.69 0c.19-.19.19-.5 0-.69z"
        />
        <path
          fill="url(#maps_svg__c)"
          d="M14.253 7.797q.315.317.53.702a.488.488 0 00.854-.473 4.13 4.13 0 00-1.533-1.567.488.488 0 00-.493.843c.233.136.45.303.642.495"
        />
        <path
          fill="url(#maps_svg__d)"
          d="M12.293 6.886a.488.488 0 10.082-.973 4.12 4.12 0 00-3.268 1.194 4.1 4.1 0 00-1.209 2.918 4.1 4.1 0 001.209 2.918 4.1 4.1 0 002.918 1.207 4.12 4.12 0 002.918-1.207 4.13 4.13 0 001.2-3.174.488.488 0 10-.973.06 3.152 3.152 0 01-5.373 2.424 3.13 3.13 0 01-.923-2.228c0-.842.328-1.633.923-2.228a3.15 3.15 0 012.496-.911"
        />
        <defs>
          <linearGradient
            id="maps_svg__a"
            x1={-81.664}
            x2={119.162}
            y1={62.288}
            y2={-46.926}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C9FF" />
            <stop offset={1} stopColor="#3B72DE" />
          </linearGradient>
          <linearGradient
            id="maps_svg__b"
            x1={-79.532}
            x2={121.294}
            y1={66.208}
            y2={-43.006}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C9FF" />
            <stop offset={1} stopColor="#3B72DE" />
          </linearGradient>
          <linearGradient
            id="maps_svg__c"
            x1={-82.672}
            x2={118.154}
            y1={60.434}
            y2={-48.78}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C9FF" />
            <stop offset={1} stopColor="#3B72DE" />
          </linearGradient>
          <linearGradient
            id="maps_svg__d"
            x1={-82.214}
            x2={118.61}
            y1={61.274}
            y2={-47.939}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C9FF" />
            <stop offset={1} stopColor="#3B72DE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
