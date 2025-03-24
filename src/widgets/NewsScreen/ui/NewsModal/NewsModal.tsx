import React from "react";
import { Typography } from "@shared/ui";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./NewsModal.module.scss";

interface NewsModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

export const NewsModal = React.memo((props: NewsModalProps) => {
  const {
    title,
    description,
    isOpen,
    onClose
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="slider"
    >
      <div className={cls.news__item__text}>
        <Typography color="primary" variant="p" bold>
          {title}
        </Typography>
        <Typography color="white-primary" variant="span">
          {description}
        </Typography>
      </div>
    </Modal>
  );
});