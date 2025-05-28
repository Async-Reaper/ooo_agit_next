"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IUser } from "@entities/User";
import { DeleteUserButton } from "@features/DeleteUser";
import { db } from "@main/FirebaseProvider";
import { classNames } from "@shared/libs/classNames/classNames";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import cls from "./EmployeesList.module.scss";

export const EmployeesList = React.memo(() => {
  const [employeesList, setEmployeesList] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchEmployeesList = useCallback(async () => {
    setIsLoading(true);
    const responseEmployees = query(collection(db, "users"), where("role", "==", "employee"));
    const realtimeQueryEmployees = onSnapshot(responseEmployees, (snapshot) => {
      const updatedUsers: IUser[] = [];
      snapshot.forEach((doc) => {
        updatedUsers.push(doc.data() as IUser);
      });
      setEmployeesList(updatedUsers);
      setIsLoading(false);
    }, (error) => {
      console.error("Ошибка подписки на обновления:", error);
    });

    return () => realtimeQueryEmployees();
  }, []);

  useEffect(() => {
    fetchEmployeesList();
  }, [fetchEmployeesList]);

  return (
    <div className={cls.employees__list__wrapper}>
      {
        employeesList.map((employee) =>
          <div key={employee.id} className={cls.employee__wrapper}>
            <div className={cls.employee__header}>
              <div className={cls.employee__name}>
                <Typography variant="p">
                  {employee.userName}
                </Typography>
              </div>
              <div>
                <DeleteUserButton userId={employee.id} />
              </div>
            </div>
            <div className={cls.links__wrapper}>
              <AppLink className={classNames(cls.link, {}, [cls.all])} variant="secondary" href={`/admin?role=admin&employeeId=${employee.id}`}>
                <Typography variant="p">
                  Все задачи
                </Typography>
              </AppLink>
              <AppLink className={classNames(cls.link, {}, [cls.at_work])} href={`/admin?role=admin&employeeId=${employee.id}&tasks=at_work`}>
                <Typography variant="p">
                  Задачи в работе
                </Typography>
              </AppLink>
              <AppLink className={classNames(cls.link, {}, [cls.expired])} href={`/admin?role=admin&employeeId=${employee.id}&tasks=expired`}>
                <Typography variant="p">
                  Просроченные задачи
                </Typography>
              </AppLink>
              <AppLink className={classNames(cls.link, {}, [cls.finish])} href={`/admin?role=admin&employeeId=${employee.id}&tasks=finish`}>
                <Typography variant="p">
                  Выполненые задачи
                </Typography>
              </AppLink>
            </div>
          </div>
        )
      }
    </div>
  );
});
