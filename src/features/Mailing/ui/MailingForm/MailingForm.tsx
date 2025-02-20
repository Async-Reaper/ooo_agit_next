"use client";
import React, { useCallback, useMemo, useState } from "react";
import { fetchMailing } from "@features/Mailing/model/api/fetchMailing";
import { Button, Input, Loader, Typography } from "@shared/ui";

import cls from "./MailingForm.module.scss";

interface MailingFormProps {
  close: () => void;
}

export const MailingForm = React.memo(({ close }: MailingFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const date = new Date();
  const [currentDateRequest] = useState(`
   ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
   `);

  const onHandleSendInternship = useCallback(async () => {
    setIsLoading(true);
    await fetchMailing({ email , date: currentDateRequest });
    setEmail("");
    setIsLoading(false);
    close();
  }, [email]);

  const disabled = useMemo(
    () => !email,
    [email],
  );

  return (
    <div className={cls.mailing__form}>
      <Input type="email" fullWidth placeholder="Ваш email" value={email} onChange={setEmail}/>
      <div className={cls.mailing__button__wrapper}>
        {
          isLoading
            ? <Loader/>
            :
            (
              <Button variant="outlined" fullWidth disabled={disabled} onClick={onHandleSendInternship}>
                <Typography variant="span" uppercase>
                  подписаться
                </Typography>
              </Button>
            )
        }
      </div>
    </div>
  );
});
