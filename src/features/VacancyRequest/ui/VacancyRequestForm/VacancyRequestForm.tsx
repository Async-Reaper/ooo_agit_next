"use client";
import React, { useCallback, useMemo, useState } from "react";
import {
   Button, Input, InputPhone, Loader, TextArea, Typography,
} from "@shared/ui";
import { fetchVacancyRequest } from "../../model/api/fetchVacancyRequest";
import cls from "./VacancyRequestForm.module.scss";

interface VacancyRequestFormProps {
   close: () => void;
}

export const VacancyRequestForm = React.memo((props: VacancyRequestFormProps) => {
   const {
      close,
   } = props;

   const [fullName, setFullName] = useState<string>("");
   const [phoneNumber, setPhoneNumber] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [aboutMyself, setAboutMyself] = useState<string>("");

   const date = new Date();
   const [currentDateRequest] = useState(`
   ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
   `);

   const [isLoading, setIsLoading] = useState<boolean>(false);

   const onHandleVacancyRequest = useCallback(async () => {
      setIsLoading(true);

      await fetchVacancyRequest({
         full_name: fullName,
         phone: phoneNumber,
         email,
         about_myself: aboutMyself,
         date_request: currentDateRequest,
      });

      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setAboutMyself("");
      setIsLoading(false);
      close();
   }, [fullName, phoneNumber, aboutMyself, email]);

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
                     <Button fullWidth disabled={disabled} onClick={onHandleVacancyRequest}>
                        <Typography variant="span" uppercase>
                           отправить
                        </Typography>
                     </Button>
                  )
            }
         </div>
      </div>
   );
});
