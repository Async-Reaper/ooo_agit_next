"use client";
import React from "react";
import { Button, Typography } from "@shared/ui";
import { useModal } from "@shared/hooks";
import { ConsultationModal } from "../ConsultationModal/ConsultationModal";

const Component = () => {
   const { isOpen, open, close } = useModal();
   return (
      <>
         <Button size="xl" maxWidth onClick={open}>
            <Typography variant="small" uppercase>
               Получить консультацию
            </Typography>
         </Button>
         <ConsultationModal isOpen={isOpen} onClose={close} />
      </>
   );
};

export const ConsultationButton = React.memo(Component);
