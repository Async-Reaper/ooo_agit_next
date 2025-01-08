"use client"
import React, { useCallback, useMemo, useState } from "react";
import {
   Button, Input, InputPhone, Loader, Select, Typography,
} from "@shared/ui";
import { SelectItem } from "@shared/ui/Select/Select";
import cls from "./ConsultationForm.module.scss";
import { fetchSendConsultation } from "../../model/api/fetchSendConsultation";

interface ConsultationFormProps {
   close: () => void;
}

const Component = (props: ConsultationFormProps) => {
   const {
      close,
   } = props;
   const [consultationSelectValue, setConsultationSelectValue] = useState("Интересующая услуга");
   const [consultationSelectItems] = useState<SelectItem[]>([
      {
         id: 1,
         content: "Комплексная автоматизация бизнеса",
      },
      {
         id: 2,
         content: "Разработка ПО",
      },
      {
         id: 3,
         content: "Внедрение и сопровождение IT-систем",
      },
      {
         id: 4,
         content: "Анализ и оптимизация бизнес-процессов",
      },
   ]);
   const [fullName, setFullName] = useState<string>("");
   const [phoneNumber, setPhoneNumber] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const date = new Date();
   const [currentDateRequest] = useState(`
   ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
   `);

   const onHandleSendConsultation = useCallback(async () => {
      setIsLoading(true);
      await fetchSendConsultation({
         full_name: fullName,
         phone_number: phoneNumber,
         theme: consultationSelectValue,
         date: currentDateRequest,
      });
      setFullName("");
      setPhoneNumber("");
      setConsultationSelectValue("Интересующая услуга");
      setIsLoading(false);
      close();
   }, [fullName, phoneNumber, consultationSelectValue]);

   const disabled = useMemo(
      () => !fullName || !phoneNumber || consultationSelectValue === "Интересующая услуга",
      [fullName, phoneNumber, consultationSelectValue],
   );

   return (
      <div className={cls.consultation__form}>
         <Input fullWidth placeholder="Ваше ФИО" value={fullName} onChange={setFullName} />
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
                        <Typography variant="small" uppercase>
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
