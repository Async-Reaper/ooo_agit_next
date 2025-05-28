"use client";
import React, { useState } from "react";
import { Button, Loader, Typography } from "@shared/ui";
import axios from "axios";

import cls from "./DeleteUserForm.module.scss";

interface ConsultationFormProps {
  userId: string;
  close: () => void;
}

const DeleteUserForm = React.memo((props: ConsultationFormProps) => {
  const {
    userId,
    close,
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onHandleDeleteUser = async () => {

    console.log(userId.toString());
    try {
      setIsLoading(true);
      setError("");
      const response = await axios.delete(`/api/delete-user/${userId}`);
      close();
    } catch (e: unknown) {
      setError("При попытке удаления произошла ошибка. Повторите попытку позже.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cls.delete_user__form}>
      <div className={cls.delete_user__title}>
        <Typography variant="p" bold uppercase noWrap>
          Вы уверены, что хотите удалить сотрудника?
        </Typography>
      </div>
      <div className={cls.action__wrapper}>
        {
          isLoading
            ? <Loader/>
            : (
              <div className={cls.delete_user__button__wrapper}>
                <Button fullWidth onClick={onHandleDeleteUser}>
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
            )
        }
      </div>
      {
        error &&
        <div>
          <Typography variant="span" bold color="red-error">
            * {error}
          </Typography>
        </div>
      }
    </div>
  );
});

export default DeleteUserForm;
