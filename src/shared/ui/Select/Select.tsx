"use client";
import React, { useCallback, useState } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";

import cls from "./Select.module.scss";

export interface SelectItem<T> {
  id: number;
  content: T;
}

interface SelectProps<T> {
  selectTitle: string
  selectItems: SelectItem<T>[];
  setSelectTitle: (value: string | any) => void;
  fullWidth?: boolean
}

const Component = (props: SelectProps<string>) => {
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
        <Typography variant="p">
          {selectTitle}
        </Typography>
        <Icon
          name="arrow_bottom"
          color="primary"
          className={classNames(cls.select__arrow, { [cls.active]: isVisibleSelect })}
        />
      </div>
      <div className={classNames(cls.select__items, { [cls.active]: isVisibleSelect })}>
        {
          selectItems.map((selectItem) => (
            <div key={selectItem.id} className={cls.select__item} onClick={() => onHandleSetCurrentValue(selectItem.content)}>
              <Typography variant="span" color="white-primary">
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
