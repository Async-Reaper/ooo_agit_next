"use client";
import React from "react";
import { Typography } from "@shared/ui";

import cls from "./CaseCard.module.scss";

import { ICase } from "../../model/types/casesTypes";

interface CaseCardProps {
  caseItem: ICase;
}

export const CaseCard = React.memo(({ caseItem }: CaseCardProps) => {

  return (
    <div className={cls.case_card__wrapper}>
      {
        caseItem.img && <img src={caseItem.img} alt="" className={cls.case__img} />
      }
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

