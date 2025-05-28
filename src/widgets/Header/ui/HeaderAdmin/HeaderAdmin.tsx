"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IUser } from "@entities/User";
import { UserRole } from "@entities/User/model/types/user";
import { LogoutButton } from "@features/Logout";
import { db } from "@main/FirebaseProvider";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { doc, getDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";

import cls from "./HeaderAdmin.module.scss";

export const HeaderAdmin = React.memo(() => {
  const [user, setUser] = useState<IUser>();
  const userId = localStorage.getItem("userId")!;
  const router = useRouter();
  const searchParams = useSearchParams();
  const userRole = searchParams?.get("role");

  const onHandleUser = useCallback(async () => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data() as IUser; // данные без id
      setUser(userData);
    } catch (err) {
      console.error("Ошибка при загрузке пользователя:", err);
    }
  }, [userId]);

  // useEffect(() => {
  //   if (user?.role === UserRole.ADMIN) {
  //     router.push("/admin?role=admin");
  //   }
  // }, [router, user?.role]);
  
  useEffect(() => {
    onHandleUser();
  }, [onHandleUser]);

  return (
    <div className={cls.header__wrapper}>

      <div className={cls.header__links}>
        {
          user?.role === UserRole.ADMIN
            ? <>
              <AppLink variant="secondary" href="/admin/employees">
                <Typography variant="p">
                  Сотрудники
                </Typography>
              </AppLink>
              <AppLink variant="secondary" href="/admin?role=admin">
                <Typography variant="p">
                  Задачи
                </Typography>
              </AppLink>
            </>
            :
            <>
              <AppLink variant="secondary" href="/admin">
                <Typography variant="p">
                  Все задачи
                </Typography>
              </AppLink>
              <AppLink variant="secondary" href="/admin?tasks=at_work">
                <Typography variant="p">
                  В работе
                </Typography>
              </AppLink>
              <AppLink variant="secondary" href="/admin?tasks=finish">
                <Typography variant="p">
                  Завершенные
                </Typography>
              </AppLink>
            </>
        }
      </div>
      <div className={cls.header__auth__control}>
        <div>
          <Typography variant="p">
            {user?.userName}
          </Typography>
        </div>
        <LogoutButton/>
      </div>
    </div>
  );
});

