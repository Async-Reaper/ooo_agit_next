import React from "react";
import { IVacancy } from "@entities/Vacancy";
import { VacancyRequestButton } from "@features/VacancyRequest";
import { Loader, Typography } from "@shared/ui";
import { AppImage } from "@shared/ui/AppImage";

import cls from "./VacancyCard.module.scss";

interface VacancyCardProps {
  vacancy: IVacancy;
  isLoading: boolean;
}

export const VacancyCard = React.memo(({ vacancy, isLoading }: VacancyCardProps) => {
  return (
    <div className={cls.card__wrapper}>
      {
        isLoading
          ?
          <Loader/>
          :
          (
            <>
              <div className={cls.vacancy__header}>
                <div className={cls.card__img}>
                  <AppImage src={vacancy?.img} alt=""/>
                  <Typography variant="h3" align="center" uppercase bold>{vacancy.name}</Typography>
                </div>
                <div className={cls.vacancy__request__wrapper}>
                  <VacancyRequestButton/>
                </div>
              </div>
              <div className={cls.card__content}>
                <div className={cls.content__point}>
                  <Typography variant="p" color="primary" bold>Описание</Typography>
                  {vacancy?.description?.map((descriptionItem) => (
                    <div key={descriptionItem} className={cls.point__item}>
                      <div className={cls.point__marker}></div>
                      <Typography variant="span">
                        {descriptionItem}
                      </Typography>
                    </div>
                  ))}
                </div>
                <div className={cls.content__point}>
                  <Typography variant="p" color="primary" bold>Обязанности</Typography>
                  {vacancy?.responsibilities?.map((responsibilitiesItem) => (
                    <div key={responsibilitiesItem} className={cls.point__item}>
                      <div className={cls.point__marker}></div>
                      <Typography variant="span">
                        {responsibilitiesItem}
                      </Typography>
                    </div>
                  ))}
                </div>
                <div className={cls.content__point}>
                  <Typography variant="p" color="primary" bold>Требования</Typography>
                  {vacancy?.requirements?.map((requirementsItem) => (
                    <div key={requirementsItem} className={cls.point__item}>
                      <div className={cls.point__marker}></div>
                      <Typography variant="span">
                        {requirementsItem}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )
      }
    </div>
  );
});
