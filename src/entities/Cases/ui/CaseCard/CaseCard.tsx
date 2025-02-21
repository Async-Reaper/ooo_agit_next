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

  const type = {
    [cls.primary]: caseItem.type === CaseTypes.INTEGRATION,
    [cls.secondary]: caseItem.type === CaseTypes.WEB_TECH,
    [cls.classic]: caseItem.type === CaseTypes.AUTOMATION,
  };

  return (
    <div className={classNames(cls.case_card__wrapper, type)}>
      <div className={cls.case__text}>
        <div className={cls.case_type}>
          <Typography variant="span" color="secondary" uppercase bold>
            {caseItem?.type}
          </Typography>
        </div>
        <div className={cls.case__title}>
          <Typography variant="h3" bold>
            {caseItem?.title}
          </Typography>
        </div>
        <div className={classNames(cls.case_result__wrapper, type)}>
          <Typography variant="p" uppercase bold>
            результат
          </Typography>
          <div className={cls.result__text}>
            <Typography variant="p" color="white-primary">
              {caseItem?.result}
            </Typography>
          </div>
        </div>
      </div>
      {
        caseItem.img && <img src={caseItem.img} alt="" className={cls.case__img} />
      }
    </div>
  );
});

