"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IUser } from "@entities/User";
import { db } from "@main/FirebaseProvider";
import { Typography } from "@shared/ui";
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
            <div className={cls.employee__name}>
              <Typography variant="p">
                {employee.userName}
              </Typography>
            </div>
          </div>
        )
      }
    </div>
  );
});
