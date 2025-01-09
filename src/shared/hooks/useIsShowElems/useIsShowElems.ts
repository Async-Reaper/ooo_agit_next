"use client";
import { useCallback, useState } from "react";

export const useIsShowElems = () => {
   const [isShowBurgerMenu, setIsShowBurgerMenu] = useState<boolean>(false);

   const toggleIsShowBurgerMenu = useCallback(() => {
      setIsShowBurgerMenu(!isShowBurgerMenu);
   }, [isShowBurgerMenu, setIsShowBurgerMenu]);

   return {
      isShowBurgerMenu,
      toggleIsShowBurgerMenu,
   };
};
