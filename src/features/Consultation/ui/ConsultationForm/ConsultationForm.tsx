"use client";
import React, { useCallback, useMemo, useState } from "react";
import type { SelectItem } from "@shared/ui";
import { Button, Input, InputPhone, Loader, Select,Typography } from "@shared/ui";
import Alert from "@shared/ui/Alert/Alert";
import axios from "axios";

import cls from "./ConsultationForm.module.scss";

import { ThemeConsultationType } from "../../model/types/consultationTypes";

interface ConsultationFormProps {
  close: () => void;
}

const ConsultationForm = React.memo((props: ConsultationFormProps) => {
  const {
    close,
  } = props;
  const [consultationSelectValue, setConsultationSelectValue] = useState<ThemeConsultationType>(ThemeConsultationType.DEFAULT);
  const [consultationSelectItems] = useState<SelectItem<ThemeConsultationType>[]>([
    {
      id: 1,
      content: ThemeConsultationType.AUTOMATION,
    },
    {
      id: 2,
      content: ThemeConsultationType.DEVELOPMENT_SOFTWARE,
    },
    {
      id: 3,
      content: ThemeConsultationType.IMPLEMENTATION_AND_SUPPORT,
    },
    {
      id: 4,
      content: ThemeConsultationType.ANALYSIS,
    },
    {
      id: 5,
      content: ThemeConsultationType.OTHER,
    },
  ]);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onHandleSendConsultation = useCallback(async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await axios.post("/api/request-consultation", {
        full_name: fullName,
        phone_number: phoneNumber,
        theme: consultationSelectValue,
      });
      setFullName("");
      setPhoneNumber("");
      setConsultationSelectValue(ThemeConsultationType.DEFAULT);
      if (response.status === 200) {
        setIsSuccess(true);
        close();
      }
    } catch (e) {
      setIsError(true);
      console.log(e);
    }

    setIsLoading(false);
  }, [fullName, phoneNumber, consultationSelectValue]);

  const disabled = useMemo(
    () => !fullName || !phoneNumber || consultationSelectValue === ThemeConsultationType.DEFAULT,
    [fullName, phoneNumber, consultationSelectValue],
  );

  return (
    <div className={cls.consultation__form}>
      <Input fullWidth placeholder="Ваше ФИО" value={fullName} onChange={setFullName} onlyRu />
      <InputPhone value={phoneNumber} onChange={setPhoneNumber} />
      <Select
        fullWidth
        selectTitle={consultationSelectValue}
        selectItems={consultationSelectItems}
        setSelectTitle={setConsultationSelectValue}
      />
      <div className={cls.consultation__button__wrapper}>
        {
          isLoading
            ? <Loader />
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
        isError && <Alert variant="error" message="Ууупс... Произошла ошибка, повторите позже :(" />
      }
    </div>
  );
});

export default ConsultationForm;
