import React from "react";
import {IVacancy} from "@entities/Vacancy";
import {Loader, Typography} from "@shared/ui";
import {AppImage} from "@shared/ui/AppImage";
import cls from "./VacancyCard.module.scss";

interface VacancyCardProps {
   vacancy: IVacancy;
   isLoading: boolean;
}

export const VacancyCard = React.memo(({vacancy, isLoading}: VacancyCardProps) => {
   return (
      <div className={cls.vacancy__card__wrapper}>
         {
            isLoading
               ? <Loader/>
               :
               (
                  <>
                     <div className={cls.vacancy__card__img}>
                        <AppImage src={vacancy?.img} alt=""/>
                     </div>
                     <div className={cls.vacancy__description}>
                        <Typography variant="p" color="primary" bold>Описание</Typography>
                        {vacancy?.description?.map((descriptionItem) => (
                           <div key={descriptionItem}>
                              <Typography variant="span">
                                 -
                                 {" "}
                                 {descriptionItem}
                              </Typography>
                           </div>
                        ))}
                     </div>
                     <div className={cls.vacancy__responsibilities}>
                        <Typography variant="p" color="primary" bold>Обязанности</Typography>
                        {vacancy?.responsibilities?.map((responsibilitiesItem) => (
                           <div key={responsibilitiesItem}>
                              <Typography variant="span">
                                 -
                                 {" "}
                                 {responsibilitiesItem}
                              </Typography>
                           </div>
                        ))}
                     </div>
                     <div className={cls.vacancy__requirements}>
                        <Typography variant="p" color="primary" bold>Требования</Typography>
                        {vacancy?.requirements?.map((requirementsItem) => (
                           <div key={requirementsItem}>
                              <Typography variant="span">
                                 -
                                 {" "}
                                 {requirementsItem}
                              </Typography>
                           </div>
                        ))}
                     </div>
                  </>
               )
         }
      </div>
   );
});
