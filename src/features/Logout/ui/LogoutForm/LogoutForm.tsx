"use client";
import React from "react";
import { Button, Typography } from "@shared/ui";
import { useRouter } from "next/navigation";

import cls from "./LogoutForm.module.scss";


interface LogoutFormProps {
  close: () => void;
}

const LogoutForm = React.memo((props: LogoutFormProps) => {
  const {
    close,
  } = props;
  const router = useRouter();

  const onHandleLogout =  () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
    router.push("/admin/login");
    close();
  };

  return (
    <div className={cls.consultation__form}>
      <div className={cls.consultation__button__wrapper}>
        <Button fullWidth onClick={onHandleLogout}>
          <Typography variant="span" uppercase>
            Да
          </Typography>
        </Button>
        <Button fullWidth variant="outlined" onClick={close}>
          <Typography variant="span" uppercase>
            Нет
          </Typography>
        </Button>
      </div>
    </div>
  );
});

export default LogoutForm;
