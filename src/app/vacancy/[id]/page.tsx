import {IVacancy, VacancyCard} from "@entities/Vacancy";
import {VacancyRequestButton} from "@features/VacancyRequest";
import React, {FC} from "react";
import {Metadata} from "next";
import cls from "./page.module.scss";
import {doc, getDoc} from "firebase/firestore";
import {db} from "@main/FirebaseProvider";
import {Typography} from "@shared/ui";
import {AppLink} from "@shared/ui/AppLink";
import Image from "next/image";
import ArrowBack from "@shared/libs/icons/source/arrow_back.svg";

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
      description: vacancy.description.toString(),
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
   let isLoading = true;
   const responseVacancy = doc(db, "vacancies", id);
   const result = await getDoc(responseVacancy);
   const vacancy = result.data() as IVacancy;
   isLoading = false;

   return (
      <div className={cls.vacancy}>
         <div className={cls.vacancy__link_back}>
            <AppLink href="/about#vacancy" variant="primary">
               <Image src={ArrowBack} alt="назад" width={20} />
               <Typography variant="span">
                  Назад
               </Typography>
            </AppLink>
         </div>
         <div className={cls.vacancy__wrapper}>
            <VacancyCard vacancy={vacancy} isLoading={isLoading}/>
            <VacancyRequestButton/>
         </div>
      </div>
   );
};
export default DynamicPage;
