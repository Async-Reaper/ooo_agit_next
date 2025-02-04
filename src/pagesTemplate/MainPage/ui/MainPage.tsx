import { PlatformScreen } from "@widgets/PlatformScreen";
import { ServicesScreen } from "@widgets/ServicesScreen";
import { ActivityScreen } from "@widgets/ActivityScreen";
import { StartScreen } from "@widgets/StartScreen";
import { BrandsList } from "@widgets/BrandsList";
import { SolutionsScreen } from "@widgets/SolutionsScreen";

export const MainPage = () => (
   <>
      <StartScreen />
      <BrandsList />
      <SolutionsScreen />
      <ActivityScreen />
      <ServicesScreen />
      <PlatformScreen />
   </>
);
