import { Modal } from "@shared/ui/Modal/Modal";
import { Social, Typography } from "@shared/ui";

import cls from "./HeaderModal.module.scss";

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
               <Typography color="primary" variant="p" bold>E-mail: </Typography>
               <Typography>1c@agit.su</Typography>
            </div>
            <div className={cls.contact__item}>
               <Typography color="primary" variant="p" bold>Телефон: </Typography>
               <Typography>+7 (3843) 328-000</Typography>
            </div>
            <div className={cls.contact__item}>
               <Typography color="primary" variant="p" bold>Адрес: </Typography>
               <Typography>г. Новокузнецк, пр-т Строителей, д. 19 </Typography>
            </div>
         </div>
         <div className={cls.contact__social__wrapper}>
            <Typography color="primary" variant="p" bold>Наши соцсети: </Typography>
            <Social />
         </div>
      </div>
   </Modal>
);
