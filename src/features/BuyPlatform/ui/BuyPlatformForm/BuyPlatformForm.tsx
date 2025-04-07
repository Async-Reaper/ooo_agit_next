"use client";
import React, { useCallback, useMemo, useState } from "react";
import { IBuyPlatformBodyRequest } from "@features/BuyPlatform";
import { Button, Input, InputPhone, Loader, Typography } from "@shared/ui";
import Alert from "@shared/ui/Alert/Alert";
import axios from "axios";

import cls from "./BuyPlatformForm.module.scss";
import { useParams } from "next/navigation";


interface ConsultationFormProps {
  close: () => void;
}

const BuyPlatformForm = React.memo((props: ConsultationFormProps) => {
  const {
    close,
  } = props;
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const params = useParams<{ id: string }>();
  const onHandleSendConsultation = useCallback(async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await axios.post("/api/request-buy-platform", {
        full_name: fullName,
        phone_number: phoneNumber,
        email: email,
        platformId: params?.id,
      } as IBuyPlatformBodyRequest);
      setFullName("");
      setPhoneNumber("");
      setEmail("");
      if (response.status === 200) {
        setIsSuccess(true);
        close();
      }
    } catch (e) {
      setIsError(true);
      console.log(e);
    }

    setIsLoading(false);
  }, [fullName, phoneNumber, email]);

  const disabled = useMemo(
    () => !fullName || !phoneNumber || !email,
    [fullName, phoneNumber, email],
  );

  return (
    <div className={cls.buy_platform__form}>
      <Input fullWidth placeholder="Ваше ФИО" value={fullName} onChange={setFullName} onlyRu/>
      <Input fullWidth placeholder="Ваш email" value={email} onChange={setEmail}/>
      <InputPhone value={phoneNumber} onChange={setPhoneNumber}/>
      <div className={cls.buy_platform__button__wrapper}>
        {
          isLoading
            ? <Loader/>
            : (
              <Button fullWidth variant="outlined" disabled={disabled} onClick={onHandleSendConsultation}>
                <Typography variant="span" uppercase>
                  отправить
                </Typography>
              </Button>
            )
        }
      </div>
      {
        isError && <Alert variant="error" message="Ууупс... Произошла ошибка, повторите позже :("/>
      }
      {
        isSuccess && <Alert variant="success" message="Ваша заявка на консультацию успешно отправлена!"/>
      }
    </div>
  );
});

export default BuyPlatformForm;