"use client";

import {type ImgHTMLAttributes, memo, type ReactElement, useEffect, useRef, useState,} from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
   className?: string;
   fallback?: ReactElement;
   errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
   const {
      className,
      src,
      alt = "image",
      errorFallback,
      fallback,
      ...otherProps
   } = props;
   const [isVisible, setIsVisible] = useState(false);
   const imgRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setIsVisible(true);
                  observer.unobserve(entry.target); // Прекращаем наблюдение за элементом
               }
            });
         },
         { threshold: 0.1 } // 10% видимости
      );

      if (imgRef.current) {
         observer.observe(imgRef.current); // Начинаем наблюдение
      }

      return () => {
         if (imgRef.current) {
            observer.unobserve(imgRef.current); // Убираем наблюдение при размонтировании
         }
      };
   }, []);

   return (
      <div ref={imgRef} style={{ position: "relative", height: "100%" }}>
         {isVisible
            ? (
               <img src={src} alt={alt} style={{ width: "100%" }} />
            )
            : (
               <img alt="Loading..." style={{ width: "100%", filter: "blur(20px)" }} />
            )}
      </div>
   );
});
