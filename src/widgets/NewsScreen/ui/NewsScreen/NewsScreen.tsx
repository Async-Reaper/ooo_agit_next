"use client";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "@main/FirebaseProvider";
import { useViewBox } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";
import { Skeleton } from "@shared/ui/Skeleton";
import { collection, DocumentData, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { motion } from "framer-motion";

import cls from "./NewsScreen.module.scss";

import { INews } from "../../model/types/newsType";
import { NewsItem } from "../NewsItem/NewsItem";

export const NewsScreen = React.memo(() => {
  const [news, setNews] = useState<INews[]>([]);
  const [lastVisible, setLastVisible] = useState<DocumentData | null>(null);
  const [isLoadingInitialData, setIsLoadingInitialData] = useState<boolean>(false);
  const [isLoadingMoreData, setIsLoadingMoreData] = useState<boolean>(false);
  const { ref, isVisible } = useViewBox(0.1);

  // Функция для первоначальной загрузки данных
  const fetchInitialData = useCallback(async () => {
    setIsLoadingInitialData(true);
    try {
      const itemsRef = collection(db, "news");
      const q = query(itemsRef, orderBy("createdAt", "desc"), limit(4));

      const documentSnapshots = await getDocs(q);

      if (documentSnapshots.empty) {
        console.log("No documents to load.");
        return;
      }

      const newItems = documentSnapshots.docs.map((doc) => ({
        id: doc.id,
        path: doc.ref.path,
        ...doc.data(),
      })) as INews[];

      console.log("Initial fetched documents:", newItems);

      setNews(newItems);

      // Обновляем lastVisible на последний документ
      const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      console.log("Updating lastVisible to:", lastDoc.data());
      setLastVisible(lastDoc);
    } catch (error) {
      console.error("Ошибка при первоначальной загрузке новостей:", error);
    } finally {
      setIsLoadingInitialData(false);
    }
  }, []);

  // Функция для подгрузки новых новостей
  const fetchMoreData = useCallback(async () => {
    if (!lastVisible) return;

    setIsLoadingMoreData(true);
    try {
      const itemsRef = collection(db, "news");
      const q = query(
        itemsRef,
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(4)
      );

      const documentSnapshots = await getDocs(q);

      if (documentSnapshots.empty) {
        console.log("No more documents to load.");
        return;
      }

      const newItems = documentSnapshots.docs.map((doc) => ({
        id: doc.id,
        path: doc.ref.path,
        ...doc.data(),
      })) as INews[];

      console.log("Fetched more documents:", newItems);

      setNews((prevItems) => {
        const existingIds = new Set(prevItems.map((item) => item.id));
        const filteredNewItems = newItems.filter((item) => !existingIds.has(item.id));
        return [...prevItems, ...filteredNewItems];
      });

      // Обновляем lastVisible на последний документ
      const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      console.log("Updating lastVisible to:", lastDoc.data());
      setLastVisible(lastDoc);
    } catch (error) {
      console.error("Ошибка при подгрузке новостей:", error);
    } finally {
      setIsLoadingMoreData(false);
    }
  }, [lastVisible]);

  // Загрузка первых новостей при монтировании компонента
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

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
          initial={{ y: 1000, opacity: 0 }}
          animate={isVisible && { y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
            stiffness: 150,
            bounce: 0.5,
          }}
          className={cls.news__title__wrapper}
        >
          <Typography variant="h1" uppercase>
            Новости от нас
          </Typography>
        </motion.div>
        <ul className={cls.news__list}>
          {isLoadingInitialData
            ? new Array(4).fill("").map((_, index) => <Skeleton className={cls.skeleton} key={index} border={5}/>)
            : news.map((newsItem) => (
              <NewsItem key={newsItem.id} newsItem={newsItem}/>
            ))
          }
          {
            isLoadingMoreData && new Array(4).fill("").map((_, index) => <Skeleton className={cls.skeleton} key={index} border={5}/>)
          }
        </ul>
        <div className={cls.news__button__wrapper}>
          <Button variant="outlined" onClick={fetchMoreData}>
            <Typography variant="span" uppercase>
              Еще
            </Typography>
          </Button>
        </div>
      </div>
    </motion.section>
  );
});
