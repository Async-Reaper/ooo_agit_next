"use client";
import React from "react";
import { Typography } from "@shared/ui";

import cls from "./PlatformCard.module.scss";

import { IPlatforms } from "../../model/types/types";
import { PlatformCardAdditional } from "../PlatformCardAdditional/PlatformCardAdditional";

interface PlatformCardProps {
  platform: IPlatforms;
}

export const PlatformCard = React.memo(({ platform }: PlatformCardProps) => {
  return (
    <div className={cls.platform__card__wrapper}>
      <div className={cls.platform__card}>
        <div className={cls.platform__header}>
          <div className={cls.platform__start__info}>
            <div className={cls.start__info__img}>
              <img src={platform.img} alt=""/>
            </div>
            <div className={cls.start__info__name}>
              <Typography variant="span" align="center" bold>&laquo;{platform.imgDescription}&raquo;</Typography>
            </div>
          </div>
          <div className={cls.platform__main__info}>
            <div className={cls.platform__name}>
              <Typography variant="p" bold>{platform.platformName}</Typography>
              <div className={cls.platform__price}>
                <Typography variant="p" bold>{platform.platformPrice} ₽</Typography>
              </div>
            </div>
            <div className={cls.platform__description}>
              {platform.platformDescription.map((description, index) => (
                <Typography key={index} variant="span">{description}</Typography>
              ))}
            </div>
          </div>
        </div>
        <PlatformCardAdditional
          benefitsDescription={platform.benefitsDescription}
          benefitsList={platform.benefitsList ?? []}
          additionalInfo={platform.additionalInfo ?? ""}
        />
      </div>
    </div>
  );
});
