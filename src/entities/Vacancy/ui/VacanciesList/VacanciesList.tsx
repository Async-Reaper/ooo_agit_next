"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "@shared/ui";
import AliceCarousel from "react-alice-carousel";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { AppLink } from "@shared/ui/AppLink";
import { AppImage } from "@shared/ui/AppImage";
import cls from "./VacanciesList.module.scss";
import { IVacancy } from "../../model/types/vacancyTypes";

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

   const items = vacancies.map((vacancy, index) => (
      <div key={vacancy.id} className={cls.vacancies__item} data-value={index}>
         <AppLink href={`/vacancy/${vacancy.id}`} target="_blank">
            <AppImage src={vacancy.img} alt="" />
         </AppLink>
      </div>
   ));

   const responsive = {
      0: { items: 1 },
      750: { items: 2 },
      1024: { items: 5 },
   };
   return (
      <div className={cls.vacancies__list__wrapper}>
         {isLoading
            ? <Loader />
            : (
               <AliceCarousel
                  infinite
                  items={items}
                  responsive={responsive}
                  autoPlay
                  autoPlayInterval={3000}
                  mouseTracking
                  disableButtonsControls
               />
            )}
      </div>
   );
});
