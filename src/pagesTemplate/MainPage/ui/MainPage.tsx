import React from "react";
import { ActivityScreen } from "@widgets/ActivityScreen";
import { BrandsList } from "@widgets/BrandsList";
import { PlatformScreen } from "@widgets/PlatformScreen";
import { ServicesScreen } from "@widgets/ServicesScreen";
import { SolutionsScreen } from "@widgets/SolutionsScreen";
import { StartScreen } from "@widgets/StartScreen";

export const MainPage = () => (
  <>
    <StartScreen/>
    <SolutionsScreen/>
    <ActivityScreen/>
    <ServicesScreen/>
    <PlatformScreen/>
  </>
);
