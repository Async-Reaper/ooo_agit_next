"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Icon } from "@shared/libs/icon/icon";

import cls from "./ConsultationFlag.module.scss";

import { ConsultationModal } from "../ConsultationModal/ConsultationModal";

const Component = () => {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <div className={cls.circular__wrapper} onClick={open}>
        <div className={cls.circular__main}>
          <Icon name="consultation" size={40} color="black-primary" />
        </div>
        <div className={cls.circular__beating}/>
      </div>
      <ConsultationModal isOpen={isOpen} onClose={close}/>
    </>
  );
};

export const ConsultationFlag = React.memo(Component);
