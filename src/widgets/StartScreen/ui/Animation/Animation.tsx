"use client";
import React from "react";
import { useLottie } from "lottie-react";

import cls from "./Animation.module.scss";

import StartAnimation from "../../animation/animation.json";

export const Animation = React.memo(() => {
  const options = {
    animationData: StartAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className={cls.images}>
      { View }
    </div>
  );
});
