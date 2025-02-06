"use client";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "@main/FirebaseProvider";
import { Typography } from "@shared/ui";
import { AppImage } from "@shared/ui/AppImage";
import { AppLink } from "@shared/ui/AppLink";
import { Skeleton } from "@shared/ui/Skeleton";
import { collection, getDocs, query } from "firebase/firestore";

import cls from "./VacanciesList.module.scss";

import { IVacancy } from "../../model/types/vacancyTypes";

export const VacanciesList = React.memo(() => {
  const [vacancies, setVacancies] = useState<IVacancy[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchVacanciesList = useCallback(async () => {
    setIsLoading(true);
    const responseVacancies = query(collection(db, "vacancies"));
    const querySnapshot = await getDocs(responseVacancies);

    const newItems = querySnapshot.docs.map((doc) => (
      { id: doc.id, ...doc.data() } as IVacancy));
    setVacancies(newItems);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchVacanciesList();
  }, [fetchVacanciesList]);


  return (
    <div className={cls.vacancies__list__wrapper}>
      {isLoading
        ? new Array(6).fill("").map((_, index) => <Skeleton key={index} width={270} height={230} border={5} />)
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
