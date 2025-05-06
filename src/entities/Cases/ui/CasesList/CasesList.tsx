"use client";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "@main/FirebaseProvider";
import { classNames } from "@shared/libs/classNames/classNames";
import { Button, Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";
import { Skeleton } from "@shared/ui/Skeleton";
import { collection, getDocs, query, where } from "firebase/firestore";

import cls from "./CasesList.module.scss";

import { CaseTypes, ICase } from "../../model/types/casesTypes";
import { CaseCard } from "../CaseCard/CaseCard";

interface IGroupCase {
  id: number;
  name: CaseTypes;
  active: boolean;
}

export const CasesList = React.memo(() => {
  const [casesList, setCases] = useState<ICase[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentGroupCase, setCurrentGroupCase] = useState<CaseTypes>(CaseTypes.AUTOMATION);
  const [groupCase, setGroupCase] = useState<IGroupCase[]>([
    {
      id: 1,
      name: CaseTypes.AUTOMATION,
      active: true
    },
    {
      id: 2,
      name: CaseTypes.INTEGRATION,
      active: false
    },
    {
      id: 3,
      name: CaseTypes.WEB_TECH,
      active: false
    },
  ]);

  const onHandleGroupCase = (caseItem: IGroupCase) => {
    setCurrentGroupCase(caseItem.name);
    setGroupCase(prevState => prevState.map(group =>
      group.id === caseItem.id
        ?
        { ...group, active: true }
        :
        { ...group, active: false }
    ));
  };

  const fetchGetCases = useCallback(async () => {
    setIsLoading(true);
    const responseVacancies = query(collection(db, "cases"), where("type", "==", currentGroupCase));
    const result = await getDocs(responseVacancies);
    const casesData = result.docs.map((doc) => (
      { id: doc.id, ...doc.data() })) as ICase[];
    setCases(casesData);
    setIsLoading(false);
  }, [currentGroupCase]);

  useEffect(() => {
    fetchGetCases();
  }, [fetchGetCases]);

  return (
    <section className={cls.cases}>
      <Container>
        <div className={cls.cases__title__wrapper}>
          <Typography variant="h2" uppercase>
            Кейсы
          </Typography>
        </div>
        <div className={cls.buttons__group}>
          {
            groupCase.map(group => (
              <Button
                key={group.id}
                variant="toggle"
                active={group.active}
                color="primary"
                onClick={() => onHandleGroupCase(group)}
              >
                <Typography variant="p">{group.name}</Typography>
              </Button>
            ))
          }
        </div>
        <div className={classNames(cls.dot, {}, [cls.dot__first])}></div>
        <div className={cls.cases__wrapper}>
          {isLoading
            ? <Container>
              <div className={cls.cases__skeleton__wrapper}>
                {new Array(13).fill("").map((_, index) => <Skeleton key={index} className={cls.cases__skeleton}/>)}
              </div>
            </Container>
            : casesList.map((caseItem) =>
              caseItem.type === currentGroupCase && <CaseCard key={caseItem.id} caseItem={caseItem}/>)
          }
        </div>
        <div className={classNames(cls.dot, {}, [cls.dot__second])}></div>
      </Container>
    </section>
  );
});
