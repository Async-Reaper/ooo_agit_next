import * as React from "react";
import { SVGAttributes } from "react";

export const ChangeExperienceIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#change-experience_svg__a)">
          <mask
            id="change-experience_svg__a"
            width={24}
            height={24}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
          >
            <path fill="#fff" d="M0 0h24v24H0z" />
          </mask>
          <g mask="url(#change-experience_svg__a)">
            <mask
              id="change-experience_svg__b"
              width={11}
              height={11}
              x={0}
              y={0}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
            >
              <path fill="#fff" d="M0 0h10.928v10.928H0z" />
            </mask>
            <g mask="url(#change-experience_svg__b)">
              <path
                fill={color}
                d="M7.664 6.08a3.424 3.424 0 00.232-5.071 3.442 3.442 0 00-5.872 2.43c0 1.06.482 2.008 1.24 2.639A3.44 3.44 0 000 9.509v1.013c0 .222.18.404.404.404h10.118a.406.406 0 00.406-.404V9.509a3.443 3.443 0 00-3.264-3.43M2.83 3.437A2.634 2.634 0 017.32 1.58c.494.491.772 1.162.772 1.857A2.634 2.634 0 013.602 5.3a2.64 2.64 0 01-.772-1.862m7.286 6.68H.809V9.51A2.634 2.634 0 013.44 6.88h4.047a2.634 2.634 0 012.63 2.63z"
              />
            </g>
            <mask
              id="change-experience_svg__c"
              width={12}
              height={12}
              x={13}
              y={13}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
            >
              <path fill="#fff" d="M13.114 13.114h10.928v10.928H13.114z" />
            </mask>
            <g mask="url(#change-experience_svg__c)">
              <path
                fill={color}
                d="M20.778 19.193a3.425 3.425 0 00.231-5.07 3.442 3.442 0 00-5.872 2.43c0 1.06.483 2.01 1.242 2.64a3.44 3.44 0 00-3.265 3.431v1.013c0 .222.182.404.404.404h10.118a.406.406 0 00.406-.404v-1.013a3.44 3.44 0 00-3.264-3.431m-4.832-2.64a2.634 2.634 0 014.491-1.859c.492.492.77 1.162.77 1.858a2.634 2.634 0 01-4.489 1.861 2.64 2.64 0 01-.772-1.86m7.285 6.678h-9.307v-.607a2.634 2.634 0 012.628-2.63H20.6a2.634 2.634 0 012.63 2.63z"
              />
            </g>
            <path
              fill={color}
              d="M14.671 1.69a.4.4 0 01.315.135.436.436 0 010 .63L12.74 4.701a.437.437 0 01-.629 0 .44.44 0 010-.628l2.246-2.248a.4.4 0 01.315-.135"
            />
            <path
              fill={color}
              d="M12.424 3.938a.4.4 0 01.315.135l2.247 2.244a.437.437 0 010 .63.437.437 0 01-.63 0L12.11 4.699a.44.44 0 010-.628.4.4 0 01.314-.133"
            />
            <path
              fill={color}
              d="M12.424 3.938h7.188c.272 0 .45.178.45.448s-.178.45-.45.45h-7.188c-.27 0-.448-.18-.448-.45s.178-.448.447-.448m7.513.918c.25 0 .45.2.45.45v5.84a.45.45 0 01-.898 0v-5.84c0-.25.198-.45.448-.45"
            />
            <path
              fill={color}
              d="M19.485 3.934l.003 1.372h.898l.004-1.166s-.013-.07-.03-.106a1 1 0 01-.028-.082s-.075 0-.1-.009-.082-.007-.082-.007zM9.112 22.636A.4.4 0 018.8 22.5a.437.437 0 010-.628l2.246-2.248a.435.435 0 01.628 0 .44.44 0 010 .63L9.428 22.5a.4.4 0 01-.315.135"
            />
            <path
              fill={color}
              d="M11.36 20.39a.4.4 0 01-.315-.135l-2.246-2.247a.437.437 0 010-.629.44.44 0 01.628 0l2.248 2.246a.436.436 0 010 .63.4.4 0 01-.315.135"
            />
            <path
              fill={color}
              d="M11.36 20.39H4.17c-.269 0-.449-.18-.449-.45s.18-.45.45-.45h7.189c.27 0 .45.18.45.45s-.182.45-.45.45m-7.513-.92a.45.45 0 01-.45-.448v-5.84a.45.45 0 11.898 0v5.84c0 .248-.2.448-.448.448"
            />
            <path
              fill={color}
              d="M4.297 20.392v-1.37h-.9l-.004 1.166s.013.067.03.106l.028.081s.075 0 .1.01c.026.009.083.007.083.007z"
            />
          </g>
        </g>
        <defs>
          <clipPath id="change-experience_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
