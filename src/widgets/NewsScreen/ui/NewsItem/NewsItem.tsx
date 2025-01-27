import React from "react";
import {AppImage} from "@shared/ui/AppImage";
import {Typography} from "@shared/ui";
import {useModal} from "@shared/hooks";
import {NewsModal} from "../NewsModal/NewsModal";
import {INews} from "../../model/types/newsType";
import cls from "./NewsItem.module.scss";

interface NewsItemProps {
   newsItem: INews
}

export const NewsItem = React.memo(({newsItem}: NewsItemProps) => {
   const {isOpen, open, close} = useModal();

   return (
      <li key={newsItem.img} className={cls.news__item__wrapper}>
         <div className={cls.news__item__img}>
            <AppImage src={newsItem.img} alt=""/>
         </div>
         <div className={cls.news__item__title} onClick={open}>
            <Typography variant="p" bold>
               {newsItem.title}
            </Typography>
         </div>
         <NewsModal title={newsItem.title} description={newsItem.description} isOpen={isOpen} onClose={close}/>
      </li>
   );
});