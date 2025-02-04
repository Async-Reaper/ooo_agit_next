"use client";
import React, { useEffect, useState } from "react";
import {Loader, Typography} from "@shared/ui";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { AppLink } from "@shared/ui/AppLink";
import cls from "./VacanciesList.module.scss";
import { IVacancy } from "../../model/types/vacancyTypes";
import {AppImage} from "@shared/ui/AppImage";

export const VacanciesList = React.memo(() => {
   const [vacancies, setVacancies] = useState<IVacancy[]>([]);
   const [isLoading, setIsLoading] = useState(false);

   const fetchVacanciesList = async () => {
      setIsLoading(true);
      const responseVacancies = query(collection(db, "vacancies"));
      const querySnapshot = await getDocs(responseVacancies);

      const newItems = querySnapshot.docs.map((doc) => (
         { id: doc.id, ...doc.data() } as IVacancy));
      setVacancies(newItems);
      setIsLoading(false);
   };

   useEffect(() => {
      fetchVacanciesList();
   }, []);


   return (
      <div className={cls.vacancies__list__wrapper}>
         {isLoading
            ? <Loader />
            : vacancies.map(vacancy =>
               <AppLink
                  key={vacancy.id}
                  href={`/vacancy/${vacancy.id}`}
                  className={cls.vacancies__item}
                  isUnderline={false}
               >
                  <AppImage src={vacancy.img} className={cls.vacancy_img} />
                  <Typography variant="span">
                     {vacancy.name}
                  </Typography>
               </AppLink>
            )
         }
      </div>
   );
});
