"use client";
import React, { useState } from "react";
import { IUser } from "@entities/User";
import { UserRole } from "@entities/User/model/types/user";
import { LogoutButton } from "@features/Logout";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";

import cls from "./HeaderAdmin.module.scss";

export const HeaderAdmin = React.memo(() => {
  const [user] = useState<IUser>(JSON.parse(localStorage.getItem("user")!));

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

