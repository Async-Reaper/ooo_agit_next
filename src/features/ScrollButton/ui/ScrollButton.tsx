"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { Icon } from "@shared/libs/icon/icon";
import { Button } from "@shared/ui";

import cls from "./ScrollButton.module.scss";

const Component = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const onHandleScroll = () => {
    if (window.scrollY > 200) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  
  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener("scroll", onHandleScroll);
  }, []);
  
  const onHandleClick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className={classNames(cls.scroll__button__wrapper, { [cls.active]: isActive })} onClick={onHandleClick}>
      <Button>
        <Icon name="arrow_bottom" size={24} />
      </Button>
    </div>
  );
};

export const ScrollButton = React.memo(Component);
