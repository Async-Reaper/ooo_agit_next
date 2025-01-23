import * as React from "react";
import { SVGAttributes } from "react";

export const AddressIcon = React.memo(
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
          d="M15.396 13.889H14.21V5.278h1.19c.567 0 .882-.782.251-1.06L8.3.08a.63.63 0 00-.61 0L.29 4.246c-.515.29-.296 1.032.304 1.032h1.184v8.61H.593c-.327 0-.592.25-.592.556S.266 15 .593 15h14.803c.327 0 .592-.249.592-.556 0-.306-.265-.555-.592-.555m-2.369 0h-2.566V5.278h2.566v8.61zm-3.75-8.611v8.611H6.711V5.278zM7.994 1.203l5.264 2.964H2.731zM2.962 5.278h2.565v8.611H2.962z"
        />
      </svg>
    );
  }
);
