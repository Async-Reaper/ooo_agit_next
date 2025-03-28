"use client";
import React from "react";
import { PlatformsList } from "@entities/Platform";
import { Typography } from "@shared/ui";

import cls from "./PlatformScreen.module.scss";

export const PlatformScreen = React.memo(() => {

  return (
    <section
      id="platform"
      className={cls.platform}
    >
      <div className={cls.platform__vector__left}/>
      <div className={cls.platform__vector__right}/>
      <div className={cls.platform__wrapper}>
        <div className={cls.platform__header__wrapper}>
          <div className={cls.platform__header__title}>
            <Typography variant="h1" uppercase>
              <b>Продукты</b> нашей компании
            </Typography>
          </div>
        </div>
        <div className={cls.platforms__list__wrapper}>
          <PlatformsList />
        </div>
      </div>
    </section>
  );
});

PlatformScreen.displayName = "PlatformScreen";
