"use client";
import React, { useCallback, useState } from "react";
import { setDoc } from "@firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { Button, Loader, Typography } from "@shared/ui";
import Alert from "@shared/ui/Alert/Alert";
import { doc } from "firebase/firestore";

import cls from "./UpdateTaskForm.module.scss";

interface UpdateTaskFormProps {
  taskId: string;
  close: () => void;
}

const UpdateTaskForm = React.memo((props: UpdateTaskFormProps) => {
  const {
    taskId,
    close,
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onHandleSendUpdateTask = useCallback(async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await setDoc(doc(db, "tasks", taskId), {
        status: "finish",
        dateFinish: new Date(),
      }, { merge: true });
      close();
    } catch (e) {
      setIsError(true);
      console.log(e);
    }

    setIsLoading(false);
  }, [close, taskId]);

  return (
    <div className={cls.update_task__form}>
      <div className={cls.add_task__title}>
        <Typography variant="p" bold uppercase noWrap>
          Вы уверены, что хотите завершить задачу?
        </Typography>
      </div>
      {
        isLoading
          ? <Loader/>
          : (
            <div className={cls.update_task__button__wrapper}>
              <Button fullWidth onClick={onHandleSendUpdateTask}>
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
      {
        isError && <Alert variant="error" message="Ууупс... Произошла ошибка, повторите позже :("/>
      }
      {
        isSuccess && <Alert variant="success" message="Обновления приняты!"/>
      }
    </div>
  );
});

export default UpdateTaskForm;
