"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Button, Input, InputPhone, Loader, Select, Typography, } from "@shared/ui";
import { SelectItem } from "@shared/ui/Select/Select";

import cls from "./ConsultationForm.module.scss";

import { fetchSendConsultation } from "../../model/api/fetchSendConsultation";
import { ThemeConsultationType } from "../../model/types/consultationTypes";

interface ConsultationFormProps {
  close: () => void;
}

const Component = (props: ConsultationFormProps) => {
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

  const onHandleSendConsultation = useCallback(async () => {
    setIsLoading(true);
    await fetchSendConsultation({
      full_name: fullName,
      phone_number: phoneNumber,
      theme: consultationSelectValue,
    });
    
    setFullName("");
    setPhoneNumber("");
    setConsultationSelectValue(ThemeConsultationType.DEFAULT);
    setIsLoading(false);
    close();
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
              <Button fullWidth disabled={disabled} onClick={onHandleSendConsultation}>
                <Typography variant="span" uppercase>
                  отправить
                </Typography>
              </Button>
            )
        }
      </div>
    </div>
  );
};

export const ConsultationForm = React.memo(Component);
