"use client";
import React, { useCallback, useLayoutEffect, useRef } from "react";
import { ColoredIcon } from "@shared/libs/icon/colored-icon";
import { animate } from "motion";

import cls from "./styles.module.scss";

export const AnimationStageInternship = React.memo(() => {
  const changeExperienceRef = useRef(null);
  const bookRef = useRef(null);
  const contractRef = useRef(null);
  const bagRef = useRef(null);
  const moneyRef = useRef(null);
  const [sizeIcon, setSizeIcon] = React.useState(60);
  
  const animated = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      changeExperienceRef.current &&
      bookRef.current &&
      contractRef.current &&
      bagRef.current &&
      moneyRef.current
    ) {
      //Change experience

      (window.innerWidth > 1400)
        ? setSizeIcon(102)
        : setSizeIcon(60);

      const changeExperienceTop = window.getComputedStyle(changeExperienceRef.current).top;
      const changeExperienceLeft = window.getComputedStyle(changeExperienceRef.current).left;

      //Book
      const bookTop = window.getComputedStyle(bookRef.current).top;
      const bookLeft = window.getComputedStyle(bookRef.current).left;

      //Contract
      const contractTop = window.getComputedStyle(contractRef.current).top;
      const contractLeft = window.getComputedStyle(contractRef.current).left;

      //Bag
      const bagTop = window.getComputedStyle(bagRef.current).top;
      const bagLeft = window.getComputedStyle(bagRef.current).left;

      animate(`.${cls.change_experience}`, {
        top: [changeExperienceTop, bookTop],
        left: [changeExperienceLeft, bookLeft],
      }, {
        duration: 0.6,
        repeat: Infinity, repeatType: "reverse", repeatDelay: 2
      });

      animate(`.${cls.book}`, {
        top: [bookTop, changeExperienceTop],
        left: [bookLeft, changeExperienceLeft],
      }, {
        duration: 0.6,
        repeat: Infinity, repeatType: "reverse", repeatDelay: 2
      });

      animate(`.${cls.contract}`, {
        top: [contractTop, bagTop],
        left: [contractLeft, bagLeft],
      }, {
        duration: 0.6,
        repeat: Infinity, repeatType: "reverse", repeatDelay: 2
      });

      animate(`.${cls.bag}`, {
        top: [bagTop, contractTop],
        left: [bagLeft, contractLeft],
      }, {
        duration: 0.6,
        repeat: Infinity, repeatType: "reverse", repeatDelay: 2
      });

      animate(`.${cls.line__before}`, { opacity: [1, 0] }, {
        duration: 0.3,
        repeat: Infinity, repeatType: "reverse", repeatDelay: 2
      });

      animate(`.${cls.line__after}`, { opacity: [0, 1] }, {
        duration: 0.3,
        repeat: Infinity, repeatType: "reverse", repeatDelay: 2
      });
    }
  }, []);

  useLayoutEffect(() => {
    animated();
  }, [animated]);

  return (
    <div className={cls.stage__animation}>
      <img className={cls.line__before} src="/animationParts/internship/line-before.svg" alt=""/>
      <img className={cls.line__after} src="/animationParts/internship/line-after.svg" alt=""/>
      <div
        className={cls.change_experience}
        ref={changeExperienceRef}
      >
        <ColoredIcon
          size={sizeIcon}
          name="change_experience"
        />
      </div>
      <div
        className={cls.book}
        ref={bookRef}
      >
        <ColoredIcon
          size={sizeIcon}
          name="book"/>
      </div>
      <div
        className={cls.contract}
        ref={contractRef}
      >
        <ColoredIcon
          size={sizeIcon}
          name="contract"/>
      </div>
      <div
        className={cls.bag}
        ref={bagRef}
      >
        <ColoredIcon
          size={sizeIcon}
          name="bag"/>
      </div>
      <div
        className={cls.money}
        ref={moneyRef}
      >
        <ColoredIcon
          size={sizeIcon}
          name="money"/>
      </div>
    </div>
  );
});