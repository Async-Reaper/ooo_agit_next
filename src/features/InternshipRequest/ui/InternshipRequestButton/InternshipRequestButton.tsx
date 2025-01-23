"use client";
import React from "react";
import {useModal} from "@shared/hooks";
import {Button, Typography} from "@shared/ui";
import {InternshipRequestModal} from "../InternshipRequestModal/InternshipRequestModal";

export const InternshipRequestButton = React.memo(() => {
   const {open, isOpen, close} = useModal();

   return (
      <>
         <Button onClick={open}>
            <Typography variant="span" uppercase>
               Хочу на стажировку!
            </Typography>
         </Button>
         <InternshipRequestModal isOpen={isOpen} onClose={close} />
      </>
   );
});
