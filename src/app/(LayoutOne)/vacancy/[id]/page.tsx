import React, { FC } from "react";
import { IVacancy, VacancyCard } from "@entities/Vacancy";
import { db } from "@main/FirebaseProvider";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import Container from "@shared/ui/Container/Container";
import { doc, getDoc } from "firebase/firestore";
import { Metadata } from "next";

import cls from "./page.module.scss";

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
      <Container>
        <div className={cls.link__back__wrapper}>
          <AppLink href="/about#vacancy" variant="secondary" className={cls.link__back}>
            <Icon name="arrow_left" color="white-primary" />
            <Typography variant="p">
              Назад
            </Typography>
          </AppLink>
        </div>
        <div className={cls.vacancy__wrapper}>
          <VacancyCard vacancy={vacancy} isLoading={isLoading}/>
        </div>
      </Container>
    </div>
  );
};
export default DynamicPage;
