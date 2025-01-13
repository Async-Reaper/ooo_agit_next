import {IVacancy, VacancyCard} from "@entities/Vacancy";
import {VacancyRequestButton} from "@features/VacancyRequest";
import React from "react";
import cls from "./page.module.scss";
import {doc, getDoc} from "@node_modules/firebase/firestore";
import {db} from "@main/FirebaseProvider";

interface Params {
   id: string;
}

export async function generateMetadata({ params }: { params: Params }) {
   const { id } = params;

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

const DynamicPage = async ({ params }: { params: Params }) => {
   const responseVacancy = doc(db, "vacancies", params.id);
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
