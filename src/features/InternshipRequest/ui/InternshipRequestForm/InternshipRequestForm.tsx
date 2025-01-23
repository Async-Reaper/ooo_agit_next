"use client";
import React, {useCallback, useMemo, useState} from "react";
import {Button, Input, InputPhone, Loader, Typography,} from "@shared/ui";
import cls from "./InternshipRequestForm.module.scss";
import {fetchSendInternship} from "../../model/api/fetchSendInternship";

interface InternshipRequestFormProps {
   close: () => void;
}

export const InternshipRequestForm = ({close}: InternshipRequestFormProps) => {
   const [email, setEmail] = useState<string>("");
   const [fullName, setFullName] = useState<string>("");
   const [phoneNumber, setPhoneNumber] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const date = new Date();
   const [currentDateRequest] = useState(`
   ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
   `);

   const onHandleSendInternship = useCallback(async () => {
      setIsLoading(true);
      await fetchSendInternship({
         email: email,
         full_name: fullName,
         phone_number: phoneNumber,
         date: currentDateRequest,
      });
      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setIsLoading(false);
      close();
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
                     <Button fullWidth disabled={disabled} onClick={onHandleSendInternship}>
                        <Typography variant="small" uppercase>
                           записаться
                        </Typography>
                     </Button>
                  )
            }
         </div>
      </div>
   );
};
