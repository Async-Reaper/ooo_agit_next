"use client";
import React from "react";
import Image from "next/image";
import ConsultationIcon from "@shared/libs/icons/source/consultation.svg";
import cls from "./ConsultationFlag.module.scss";
import {useModal} from "@shared/hooks";
import {ConsultationModal} from "../ConsultationModal/ConsultationModal";

const Component = () => {
   const {isOpen, open, close} = useModal();

   return (
      <>
         <div className={cls.consultation__flag} onClick={open}>
            <div className={cls.consultation__flag__wrapper}>
               <Image width={35} src={ConsultationIcon} alt={""}/>
            </div>
         </div>
         <ConsultationModal isOpen={isOpen} onClose={close} />
      </>
   );
};

export const ConsultationFlag = React.memo(Component);