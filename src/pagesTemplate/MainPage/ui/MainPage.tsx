import { PlatformScreen } from "@widgets/PlatformScreen";
import { ServicesScreen } from "@widgets/ServicesScreen";
import { ActivityScreen } from "@widgets/ActivityScreen";
import { StartScreen } from "@widgets/StartScreen";
import { BrandsList } from "@widgets/BrandsList";
import { SolutionsScreen } from "@widgets/SolutionsScreen";
import { CasesScreen } from "@widgets/CasesScreen";

export const MainPage = () => (
   <>
      <StartScreen />
      <BrandsList />
      <SolutionsScreen />
      <CasesScreen />
      <ActivityScreen />
      <ServicesScreen />
      <PlatformScreen />
   </>
);
