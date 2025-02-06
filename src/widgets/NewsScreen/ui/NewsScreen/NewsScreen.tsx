"use client";
import React, {useCallback, useEffect, useState} from "react";
import {motion} from "motion/react";
import {useViewBox} from "@shared/hooks";
import {Button, Typography} from "@shared/ui";
import {collection, DocumentData, getDocs, limit, query, startAfter,} from "firebase/firestore";
import {db} from "@main/FirebaseProvider";
import {NewsItem} from "../NewsItem/NewsItem";
import {INews} from "../../model/types/newsType";
import cls from "./NewsScreen.module.scss";
import {Skeleton} from "@shared/ui/Skeleton";

export const NewsScreen = React.memo(() => {
   const [news, setNews] = useState<DocumentData[]>([]);
   const [lastVisible, setLastVisible] = useState<DocumentData | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { ref, isVisible } = useViewBox(0.1);

   const fetchData = useCallback(async () => {
      setIsLoading(true);
      const itemsRef = collection(db, "news");
      let q;

      if (lastVisible) {
         q = query(itemsRef, startAfter(lastVisible), limit(5));
      } else {
         q = query(itemsRef, limit(5));
      }

      const documentSnapshots = await getDocs(q);

      if (documentSnapshots.empty) {
         setIsLoading(false);
         return;
      }

      const newItems = documentSnapshots.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
      } as INews));

      setNews((prevItems) => {
         const existingIds = new Set(prevItems.map((item) => item.id));
         const filteredNewItems = newItems.filter((item) => !existingIds.has(item.id));
         return [...prevItems, ...filteredNewItems];
      });

      setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
      setIsLoading(false);
   }, [lastVisible]);

   useEffect(() => {
      isVisible && fetchData();
   }, [fetchData, isVisible]);

   return (
      <motion.section
         id="news"
         ref={ref}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className={cls.news}
      >
         <div className={cls.news__wrapper}>
            <motion.div
               initial={{y: 1000, opacity: 0}}
               animate={isVisible && {y: 0, opacity: 1}}
               transition={{
                  type: "spring", duration: 0.5, stiffness: 150, bounce: 0.5,
               }}
               className={cls.news__title__wrapper}
            >
               <Typography variant="h1" color="secondary" uppercase>
                  <b>Новости</b>
                  {" "}
                  от нас
               </Typography>
            </motion.div>
            <ul className={cls.news__list}>
               {
                  isLoading
                     ? new Array(2).fill("").map((_, index) => <Skeleton key={index} width={500} height={560} border={5} />)
                     : (
                        news?.map((newsItem) => (
                           <NewsItem key={newsItem.img} newsItem={newsItem as INews}/>
                        ))
                     )
               }
            </ul>
            <Button variant="outlined" onClick={fetchData}>
               <Typography variant="span" uppercase>
                  Еще
               </Typography>
            </Button>
         </div>
      </motion.section>
   );
});
