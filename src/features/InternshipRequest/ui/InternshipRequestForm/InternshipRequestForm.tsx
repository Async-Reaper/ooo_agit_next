"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Button, Input, InputPhone, Loader, Typography, } from "@shared/ui";
import Alert from "@shared/ui/Alert/Alert";
import axios from "axios";

import cls from "./InternshipRequestForm.module.scss";

interface InternshipRequestFormProps {
  close: () => void;
}

const InternshipRequestForm = (props: InternshipRequestFormProps) => {
  const { close } = props;
  
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onHandleSendInternship = useCallback(async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    
    try {
      const response = await axios.post("/api/request-internship", {
        email: email,
        full_name: fullName,
        phone_number: phoneNumber,
      });
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
  }, [email, fullName, phoneNumber]);

  const disabled = useMemo(
    () => !fullName || !phoneNumber || !email,
    [fullName, phoneNumber, email],
  );

  return (
    <div className={cls.internship__form}>
      <Input fullWidth placeholder="Ваше ФИО" value={fullName} onChange={setFullName} onlyRu />
      <Input type="email" fullWidth placeholder="Ваш email" value={email} onChange={setEmail} />
      <InputPhone value={phoneNumber} onChange={setPhoneNumber} />
      <div className={cls.internship__button__wrapper}>
        {
          isLoading
            ? <Loader />
            : (
              <Button variant="outlined" fullWidth disabled={disabled} onClick={onHandleSendInternship}>
                <Typography variant="span" uppercase>
                  записаться
                </Typography>
              </Button>
            )
        }
      </div>
      {
        isError && <Alert variant="error" message="Ууупс... Произошла ошибка, повторите позже :(" />
      }
      {
        isSuccess && <Alert variant="success" message="Ваша заявка на консультацию успешно отправлена!" />
      }
    </div>
  );
};

export default InternshipRequestForm;