"use client";
import React, { useCallback, useMemo, useState } from "react";
import {
  Button, Input, InputPhone, Loader, TextArea, Typography,
} from "@shared/ui";
import Alert from "@shared/ui/Alert/Alert";
import axios from "axios";

import cls from "./VacancyRequestForm.module.scss";

interface VacancyRequestFormProps {
  close: () => void;
}

const VacancyRequestForm = React.memo((props: VacancyRequestFormProps) => {
  const {
    close,
  } = props;

  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [aboutMyself, setAboutMyself] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onHandleVacancyRequest = useCallback(async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    
    try {
      const response = await axios.post("/api/request-vacancy", {
        full_name: fullName,
        phone: phoneNumber,
        email,
        about_myself: aboutMyself,
      });
      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setAboutMyself("");
      if (response.status === 200) {
        setIsSuccess(true);
        close();
      }
    } catch (e) {
      setIsError(true);
      console.log(e);
    }
    
    setIsLoading(false);
    
  }, [fullName, phoneNumber, email, aboutMyself, close]);

  const disabled = useMemo(
    () => !fullName || !phoneNumber,
    [fullName, phoneNumber],
  );

  return (
    <div className={cls.vacancy__request__form}>
      <Input fullWidth placeholder="Ваше ФИО" value={fullName} onChange={setFullName} />
      <InputPhone value={phoneNumber} onChange={setPhoneNumber} />
      <Input fullWidth placeholder="Ваш e-mail" type="email" value={email} onChange={setEmail} />
      <TextArea placeholder="Расскажите коротко о себе" value={aboutMyself} onChange={setAboutMyself} />
      <div className={cls.vacancy__request__button__wrapper}>
        {
          isLoading
            ? <Loader />
            : (
              <Button disabled={disabled} variant="outlined" fullWidth onClick={onHandleVacancyRequest}>
                <Typography variant="span" uppercase>
                  отправить
                </Typography>
              </Button>
            )
        }
      </div>
      {
        isError && <Alert variant="error" message="Ууупс... Произошла ошибка, повторите позже :(" />
      }
      {
        isSuccess && <Alert variant="success" message="Ваша заявка на вакансию успешно отправлена!" />
      }
    </div>
  );
});

export default VacancyRequestForm;
