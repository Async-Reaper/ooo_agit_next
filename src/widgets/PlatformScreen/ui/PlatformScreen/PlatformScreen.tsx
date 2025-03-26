"use client";
import React from "react";
import { PlatformsList } from "@entities/Platform";
import { useViewBox } from "@shared/hooks";
import { Typography } from "@shared/ui";
import { motion } from "motion/react";

import cls from "./PlatformScreen.module.scss";

export const PlatformScreen = React.memo(() => {
  const { ref, isVisible } = useViewBox(0.2);

  return (
    <section
      id="platform"
      className={cls.platform}
    >
      <div className={cls.platform__vector__left}/>
      <div className={cls.platform__vector__right}/>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible && { opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        ref={ref}
        className={cls.platform__wrapper}
      >
        <div className={cls.platform__header__wrapper}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible && { opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
            className={cls.platform__header__title}
          >
            <Typography variant="h1" uppercase>
              <b>Продукты</b> нашей компании
            </Typography>
          </motion.div>
        </div>
        <div className={cls.platforms__list__wrapper}>
          <PlatformsList />
        </div>
      </motion.div>
    </section>
  );
});

PlatformScreen.displayName = "PlatformScreen";
