import { Modal } from "@shared/ui/Modal/Modal";
import { Social, Typography } from "@shared/ui";

import cls from "./HeaderModal.module.scss";
import {Icon} from "@shared/libs/icon/icon";
import {ColoredIcon} from "@shared/libs/icon/colored-icon";
import {AppLink} from "@shared/ui/AppLink";
import React from "react";

interface HeaderModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export const HeaderModal = ({ isOpen, onClose }: HeaderModalProps) => (
   <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="slider"
   >
      <div className={cls.contact__wrapper}>
         <Typography variant="h2" bold uppercase noWrap>
            Наши контакты:
         </Typography>
         <div className={cls.contact__list}>
            <div className={cls.contact__item}>
               <Icon name="email" size={50} color="primary"/>
               <AppLink href="mailto:1c@agit.su" variant="secondary">
                  <Typography>1c@agit.su</Typography>
               </AppLink>
            </div>
            <div className={cls.contact__item}>
               <Icon name="phone" size={50} color="primary"/>
               <AppLink href="tel:+7(3843)328-000" variant="secondary">
                  <Typography>+7 (3843) 328-000</Typography>
               </AppLink>
            </div>
            <div className={cls.contact__item}>
               <ColoredIcon name="maps" size={50} color="primary"/>
               <AppLink href="https://yandex.ru/maps/-/CHahIKmc" target="_blank" variant="secondary">
                  <Typography>г. Новокузнецк, пр-т Строителей, д. 19 </Typography>
               </AppLink>
            </div>
         </div>
         <div className={cls.contact__social__wrapper}>
            <Social />
         </div>
      </div>
   </Modal>
);
