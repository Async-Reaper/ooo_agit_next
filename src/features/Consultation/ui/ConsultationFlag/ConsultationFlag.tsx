"use client";
import React from "react";
import {useModal} from "@shared/hooks";
import {Icon} from "@shared/libs/icon/icon";
import {ConsultationModal} from "../ConsultationModal/ConsultationModal";
import cls from "./ConsultationFlag.module.scss";

const Component = () => {
   const {isOpen, open, close} = useModal();

   return (
      <>
         <div className={cls.circular__wrapper} onClick={open}>
            <div className={cls.circular__main}>
               <Icon name="consultation" size={40} />
            </div>
            <div className={cls.circular__beating}/>
         </div>
         <ConsultationModal isOpen={isOpen} onClose={close}/>
      </>
   );
};

export const ConsultationFlag = React.memo(Component);
