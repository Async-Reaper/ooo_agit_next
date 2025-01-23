import * as React from 'react';
import {SVGAttributes} from 'react';
import {ArrowRightIcon as arrow_right} from './ArrowRight';
import {ArrowBottomIcon as arrow_bottom} from './ArrowBottom';
import {BurgerIcon as burger} from './Burger';
import {ConsultationIcon as consultation} from './Consultation';
import {EmailIcon as email} from './Email';
import {LogoIcon as logo} from './Logo';
import {PhoneIcon as phone} from './Phone';
import {PlusIcon as plus} from './Plus';
import {TgIcon as tg} from './Tg';
import {VkIcon as vk} from './Vk';

export type IconName =
  | 'arrow_right'
  | 'arrow_bottom'
  | 'burger'
  | 'consultation'
  | 'email'
  | 'logo'
  | 'phone'
  | 'plus'
  | 'tg'
  | 'vk';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  arrow_right,
  arrow_bottom,
  burger,
  consultation,
  email,
  logo,
  phone,
  plus,
  tg,
  vk,
};
