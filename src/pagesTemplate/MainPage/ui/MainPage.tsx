import React from "react";
import { ActivityScreen } from "@widgets/ActivityScreen";
import { SolutionsScreen } from "@widgets/SolutionsScreen";
import { StartScreen } from "@widgets/StartScreen";

export const MainPage = () => (
  <>
    <StartScreen/>
    <SolutionsScreen/>
    <ActivityScreen/>
  </>
);
