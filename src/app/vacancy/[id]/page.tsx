import {IVacancy, VacancyCard} from "@entities/Vacancy";
import {VacancyRequestButton} from "@features/VacancyRequest";
import React, {FC} from "react";
import { Metadata, NextPage } from "next";
import cls from "./page.module.scss";
import {doc, getDoc} from "firebase/firestore";
import {db} from "@main/FirebaseProvider";

interface Params {
   params: {
      id: string;
   };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
   const { id } = await params;

   const responseVacancy = doc(db, "vacancies", id);
   const result = await getDoc(responseVacancy);
   const vacancy = result.data() as IVacancy;

   return {
      title: `Вакансия - ${vacancy.name}`,
      openGraph: {
         title: `Вакансия ${vacancy?.name}. Стань частью нашей команды и улучшай бизнес вместе с нами!`,
         description: vacancy.description.toString(),
         url: `https://ooo-agit-next.vercel.app/vacancy/${id}`,
         images: vacancy.img
      },
   };
}

const DynamicPage: FC<{ params: Params["params"] }> = async ({ params }) => {
   const { id } = await params;
   const responseVacancy = doc(db, "vacancies", id);
   const result = await getDoc(responseVacancy);
   const vacancy = result.data() as IVacancy;

   return (
      <div className={cls.vacancy}>
         <div className={cls.vacancy__wrapper}>
            <VacancyCard vacancy={vacancy}/>
            <VacancyRequestButton/>
         </div>
      </div>
   );
};
export default DynamicPage;
