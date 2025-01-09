import {VacancyPage} from "@pagesTemplate/VacancyPage";
import {Metadata} from "next";

export const metadata: Metadata = {
   title: "Вакансия",
   keywords: ["вакансия, работа, работа новокузнецк"],
   openGraph: {
      type: "website",
      description: "Стань частью нашей командры и начни улучшать бизнес уже сегодня!",
      url: "https://ooo-agit-next.vercel.app/about",
      images: "logo.svg"
   },

};

const Page = () => {
   return (
      <VacancyPage />
   );
};
export default Page ;
