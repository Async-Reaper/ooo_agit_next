import React from "react";
import { Typography } from "@shared/ui";

import cls from "./styles.module.scss";

interface PlatformCardAdditionalProps {
  benefitsDescription: string[];
  benefitsList: string[];
  additionalInfo: string;
}

export const PlatformCardAdditional = React.memo((props: PlatformCardAdditionalProps) => {
  const {
    benefitsDescription,
    benefitsList,
    additionalInfo
  } = props;
  
  return (
    <div className={cls.platform__footer__wrapper}>
      <div className={cls.platform__footer}>
        <div className={cls.benefits}>
          <div className={cls.benefits__description}>
            {benefitsDescription.map((description, index) => (
              <Typography key={index} variant="span" bold>{description}</Typography>
            ))}
          </div>
          {
            benefitsList &&
            <ul className={cls.benefits__list}>
              {benefitsList.map((benefits, index) => (
                <li key={index} className={cls.benefit__item}>
                  <div className={cls.circular__marker}></div>
                  <Typography variant="span" bold>{benefits}</Typography>
                </li>
              ))}
            </ul>
          }
        </div>
        {
          additionalInfo &&
          <div className={cls.additional__info}>
            <Typography variant="span" bold>{additionalInfo}</Typography>
          </div>
        }
      </div>
    </div>
  );
});
