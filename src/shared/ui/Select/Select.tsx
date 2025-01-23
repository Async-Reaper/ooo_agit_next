"use client";
import React, { useCallback, useState } from "react";
import { Typography } from "@shared/ui";
import { classNames } from "@shared/libs/classNames/classNames";

import cls from "./Select.module.scss";
import Image from "next/image";
import {Icon} from "@shared/libs/icon/icon";

export interface SelectItem {
   id: number;
   content: string;
}

interface SelectProps {
   selectTitle: string
   selectItems: SelectItem[];
   setSelectTitle: (value: string | any) => void;
   fullWidth?: boolean
}

const Component = (props: SelectProps) => {
   const {
      selectTitle,
      selectItems,
      setSelectTitle,
      fullWidth,
   } = props;

   const [isVisibleSelect, setIsVisibleSelect] = useState<boolean>(false);

   const onHandleVisibleSelect = useCallback(() => {
      setIsVisibleSelect(!isVisibleSelect);
   }, [isVisibleSelect, setIsVisibleSelect]);

   const mods = {
      [cls.fullWidth]: fullWidth,
   };

   const onHandleSetCurrentValue = useCallback((newValue: string) => {
      setSelectTitle(newValue);
      setIsVisibleSelect(false);
   }, [setSelectTitle]);

   return (
      <div className={classNames(cls.select__wrapper, mods)}>
         <div className={cls.select__name} onClick={onHandleVisibleSelect}>
            <Typography variant="span">
               {selectTitle}
            </Typography>
            <div className={classNames(cls.select__arrow, { [cls.active]: isVisibleSelect })}>
               <Icon name="arrow_bottom" color="white-primary" />
            </div>
         </div>
         <div className={classNames(cls.select__items, { [cls.active]: isVisibleSelect })}>
            {
               selectItems.map((selectItem) => (
                  <div key={selectItem.id} className={cls.select__item} onClick={() => onHandleSetCurrentValue(selectItem.content)}>
                     <Typography variant="small" color="white-primary">
                        {selectItem.content}
                     </Typography>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export const Select = React.memo(Component);
