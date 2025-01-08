"use client"
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { IVacancy } from "@entities/Vacancy";
import { Loader, Typography } from "@shared/ui";
import { AppImage } from "@shared/ui/AppImage";
import cls from "./VacancyCard.module.scss";
import {usePathname} from "next/navigation";

export const VacancyCard = React.memo(() => {
   const [vacancy, setVacancy] = useState<IVacancy>();
   const [isLoading, setIsLoading] = useState(false);
   const pathname = usePathname();

   const fetchVacancy = async () => {
      setIsLoading(true);
      const responseVacancy = doc(db, "vacancies", pathname.replace("/vacancy/", ""));
      const result = await getDoc(responseVacancy);
      setVacancy(result.data() as IVacancy);
      setIsLoading(false);
   };

   useEffect(() => {
      fetchVacancy();
   }, []);

   return (
      <div className={cls.vacancy__card__wrapper}>
         {
            isLoading
               ? <Loader />
               : (
                  <>
                     <div className={cls.vacancy__card__img}>
                        <AppImage src={vacancy?.img} alt="" />
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
