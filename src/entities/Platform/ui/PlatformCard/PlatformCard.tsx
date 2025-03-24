import React from "react";
import { Typography } from "@shared/ui";

import cls from "./PlatformCard.module.scss";

import { IPlatforms } from "../../model/types/types";

interface PlatformCardProps {
  platform: IPlatforms;
}

export const PlatformCard = React.memo(({ platform }: PlatformCardProps) => {
  return (
    <div className={cls.platform__card__wrapper}>
      <div className={cls.platform__header}>
        <div className={cls.platform__start__info}>
          <div className={cls.start__info__img}>
            <img src={platform.img}  alt="" />
          </div>
          <div className={cls.start__info__name}>
            <Typography variant="p" align="center" bold>&laquo;{platform.imgDescription}&raquo;</Typography>
          </div>
        </div>
        <div className={cls.platform__main__info}>
          <div className={cls.platform__name}>
            <Typography variant="body">{platform.platformName}</Typography>
            <Typography variant="body" color="primary">{platform.platformPrice} ₽</Typography>
          </div>
          <div className={cls.platform__description}>
            {platform.platformDescription.map((description, index) => (
              <Typography key={index} variant="p" bold>{description}</Typography>
            ))}
          </div>
        </div>
      </div>
      <div className={cls.platform__footer__wrapper}>
        <div className={cls.platform__footer}>
          <div className={cls.benefits}>
            <div className={cls.benefits__description}>
              {platform.benefitsDescription.map((description, index) => (
                <Typography key={index} variant="p" bold>{description}</Typography>
              ))}
            </div>
            {
              platform.benefitsList &&
              <ul className={cls.benefits__list}>
                {platform.benefitsList.map((benefits, index) => (
                  <li key={index} className={cls.benefit__item}>
                    <div className={cls.circular__marker}></div>
                    <Typography variant="p" bold>{benefits}</Typography>
                  </li>
                ))}
              </ul>
            }
          </div>
          {
            platform.additionalInfo &&
            <div className={cls.additional__info}>
              <Typography variant="p" bold>{platform.additionalInfo}</Typography>
            </div>
          }
        </div>
      </div>
    </div>
  );
});
