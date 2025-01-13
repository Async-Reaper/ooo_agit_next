"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { IVacancy } from "@entities/Vacancy";
import { Loader, Typography } from "@shared/ui";
import { AppImage } from "@shared/ui/AppImage";
import cls from "./VacancyCard.module.scss";
import {usePathname} from "next/navigation";
import Head from "next/head";

interface VacancyCardProps {
   vacancy: IVacancy;
}

export const VacancyCard = React.memo(({vacancy}: VacancyCardProps) => {
   const [isLoading, setIsLoading] = useState(false);


   return (
      <>
         <div className={cls.vacancy__card__wrapper}>
            {
               isLoading
                  ?
                  <Loader/>
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
      </>
   );
});
