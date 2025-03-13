"use client";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { useViewBox } from "@shared/hooks";
import { animate } from "motion";

import cls from "./AnimationImages.module.scss";

export const AnimationImages = React.memo(() => {
  const { isVisible, ref } = useViewBox();
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  
  const animated = useCallback(() => {
    
    animate(`.${cls.sphere__white__m__left}`, { x: [0, 525], y: [0, 390], width: [32, 12] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.sphere__blue__l__left}`, { x: [0, 430], y: [0, 80], scale: [1, 0.5] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.sphere__white__xs__left}`, { x: [0, 190], y: [0, -348], width: [12, 32] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.flight__center}`, { x: [0, -100], y: [0, 170], scaleX: [1, -1] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.sphere__white__m__center}`, {  x: [0, -207], y: [0, 130], width: [32, 14] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.comment__center}`, { x: [0, -34], y: [0, -236] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.gear__center}`, { x: [0, 53], y: [0, 10], opacity: [0, 1] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.sphere__white__xl__right}`, { x: [0, -111], y: [0, 450], width: [32, 12] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.star__right}`, { rotate: [0, -20] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.circular__right}`, { scale: [1, 0] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
    animate(`.${cls.sphere__blue__xs__right}`, { x: [0, -470], y: [0, -319], width: [12, 32] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
  }, []);
  
  useLayoutEffect(() => {
    isVisible && animated();
  }, [isVisible, setIsAnimated, animated]);
  
  return (
    <div ref={ref} className={cls.animation__images__wrapper}>
      <div className={cls.wrapper}>
        <img src="/animationParts/activity/sphere-white.webp" className={cls.sphere__white__m__left}/>
        <img src="/animationParts/activity/sphere-blue.webp" className={cls.sphere__blue__l__left}/>
        <img src="/animationParts/activity/sphere-white.webp" className={cls.sphere__white__xs__left}/>
      </div>
      <div className={cls.wrapper}>
        <img src="/animationParts/activity/flight.webp" className={cls.flight__center}/>
        <img src="/animationParts/activity/sphere-white.webp" className={cls.sphere__white__m__center}/>
        <img src="/animationParts/activity/comment.webp" className={cls.comment__center}/>
        <img src="/animationParts/activity/gear.webp" className={cls.gear__center}/>
      </div>
      <div className={cls.wrapper}>
        <img src="/animationParts/activity/sphere-white.webp" className={cls.sphere__white__xl__right}/>
        <img src="/animationParts/activity/star.webp" className={cls.star__right}/>
        <img src="/animationParts/activity/circular.webp" className={cls.circular__right}/>
        <img src="/animationParts/activity/sphere-blue.webp" className={cls.sphere__blue__xs__right}/>
      </div>
    </div>
  );
});
