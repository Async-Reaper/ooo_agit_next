import { useCallback, useState } from "react";
import { Button, Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { classNames } from "@shared/libs/classNames/classNames";
import { AppImage } from "@shared/ui/AppImage";
import cls from "./Slider.module.scss";

interface ISliderItems {
   id: number;
   img: string;
   link: string;
}

export const Slider = () => {
   const [sliderItems] = useState<ISliderItems[]>([
      {
         id: 1,
         img: "/automation_case.webp",
         link: "https://vk.com/market/product/avtomatizatsia-183182511-10651737",
      },
      {
         id: 2,
         img: "/web_tech_case.webp",
         link: "https://vk.com/market/product/web-tekhnologii-i-mobilnye-reshenia-183182511-10651743",
      },
      {
         id: 3,
         img: "/integration_case.webp",
         link: "https://vk.com/market/product/integratsia-183182511-10651738",
      },
   ]);

   const [currentIndex, setCurrentIndex] = useState<number>(0);

   const onHandleNextSlide = useCallback(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === sliderItems.length - 1) {
         setCurrentIndex(0);
      }
   }, [currentIndex, setCurrentIndex]);

   const onHandlePrevSlide = useCallback(() => {
      setCurrentIndex(currentIndex - 1);
      if (currentIndex === 0) {
         setCurrentIndex(sliderItems.length - 1);
      }
   }, [currentIndex, setCurrentIndex]);

   return (
      <div className={cls.slider__wrapper}>
         <div
            className={classNames(cls.slide__item, {}, [cls.hidden])}
         >
            <div
               className={cls.slide__info}
            >
               <AppImage src={sliderItems[currentIndex].img} alt="" />
            </div>
            <div className={cls.slider__button}>
               <AppLink href={sliderItems[currentIndex].link} target="_blank" isUnderline={false}>
                  <Button variant="outlined">
                     <Typography variant="span" uppercase>
                        подробнее
                     </Typography>
                  </Button>
               </AppLink>
            </div>
         </div>
         <div className={cls.arrows}>
            <div className={cls.arrow__back} onClick={onHandlePrevSlide} />
            <div className={cls.arrow__next} onClick={onHandleNextSlide} />
         </div>
      </div>
   );
};
