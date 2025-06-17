import { Skeleton } from "@shared/ui/Skeleton";
import dynamic from "next/dynamic";

import cls from "./Animation.module.scss";

export const AnimationLazy = dynamic(() => import("./Animation"), {
  ssr: false,
  loading: () => (
    <Skeleton className={cls.animation__skeleton} />
  ),
});
