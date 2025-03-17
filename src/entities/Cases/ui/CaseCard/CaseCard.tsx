"use client";
import React from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { Typography } from "@shared/ui";

import cls from "./CaseCard.module.scss";

import { CaseTypes, ICase } from "../../model/types/casesTypes";

interface CaseCardProps {
  caseItem: ICase;
}

export const CaseCard = React.memo(({ caseItem }: CaseCardProps) => {

  const mods = {
    [cls.primary]: caseItem.type === CaseTypes.AUTOMATION,
    [cls.secondary]: caseItem.type === CaseTypes.INTEGRATION,
    [cls.tertiary]: caseItem.type === CaseTypes.WEB_TECH,
  };

  return (
    <div className={classNames(cls.case_card__wrapper, mods)}>
      <div className={cls.case__img}>
        <img src={caseItem.img} alt="" />
      </div>
      <div className={cls.case__content}>
        <div className={cls.case__title}>
          <Typography variant="h2" bold>
            {caseItem?.title}
          </Typography>
        </div>
        <div className={cls.result__text}>
          <Typography variant="h3" color="white-primary">
            {caseItem?.result}
          </Typography>
        </div>
      </div>
    </div>
  );
});

