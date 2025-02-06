"use client";
import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@main/FirebaseProvider";
import {Loader} from "@shared/ui";
import {CaseCard} from "../CaseCard/CaseCard";
import { ICase } from "../../model/types/casesTypes";
import cls from "./CasesList.module.scss";
import {Skeleton} from "@shared/ui/Skeleton";

export const CasesList = React.memo(() => {
   const [casesList, setCases] = useState<ICase[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const fetchGetCases = useCallback(async () => {
      setIsLoading(true);
      const responseVacancies = query(collection(db, "cases"));
      const result = await getDocs(responseVacancies);
      const casesData = result.docs.map((doc) => (
         { id: doc.id, ...doc.data() }  )) as ICase[];
      setCases(casesData);
      setIsLoading(false);
   }, []);

   useEffect(() => {
      fetchGetCases();
   }, [fetchGetCases]);

   return (
      <section className={cls.cases__wrapper}>
         {isLoading
            ? new Array(13).fill("").map((_, index) => <Skeleton key={index} className={cls.cases__skeleton}/>)
            : casesList.map((caseItem) => (
               <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))
         }
      </section>
   );
});
