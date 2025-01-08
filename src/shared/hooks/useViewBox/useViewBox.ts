"use client"

import { useLayoutEffect, useRef, useState } from "react";

export const useViewBox = (threshold = 0.4) => {
   const ref = useRef<any>(null);
   const [isVisible, setIsVisible] = useState(false);

   useLayoutEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(ref.current);
            }
         },
         {
            threshold,
         },
      );

      if (ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         if (ref.current) {
            observer.unobserve(ref.current);
         }
      };
   }, []);

   return {
      ref,
      isVisible,
   };
};
