import * as React from 'react';
import {SVGAttributes} from 'react';
import {AnalystIcon as analyst} from './Analyst';
import {ArrowLeftIcon as arrow_left} from './ArrowLeft';
import {ArrowBottomIcon as arrow_bottom} from './ArrowBottom';
import {ArrowCircularIcon as arrow_circular} from './ArrowCircular';
import {AutomationIcon as automation} from './Automation';
import {BagIcon as bag} from './Bag';
import {BookIcon as book} from './Book';
import {BurgerIcon as burger} from './Burger';
import {ChangeExperienceIcon as change_experience} from './ChangeExperience';
import {ConsultationIcon as consultation} from './Consultation';
import {ContractIcon as contract} from './Contract';
import {EmailIcon as email} from './Email';
import {FavoriteIcon as favorite} from './Favorite';
import {GearsIcon as gears} from './Gears';
import {GearLaptopIcon as gear_laptop} from './GearLaptop';
import {GearProcessesIcon as gear_processes} from './GearProcesses';
import {GearWebIcon as gear_web} from './GearWeb';
import {LogoIcon as logo} from './Logo';
import {MapIcon as map} from './Map';
import {MoneyIcon as money} from './Money';
import {PhoneIcon as phone} from './Phone';
import {PlusIcon as plus} from './Plus';
import {RhombIcon as rhomb} from './Rhomb';
import {TgIcon as tg} from './Tg';
import {VkIcon as vk} from './Vk';
import {WebDevIcon as web_dev} from './WebDev';

export type IconName =
  | 'analyst'
  | 'arrow_left'
  | 'arrow_bottom'
  | 'arrow_circular'
  | 'automation'
  | 'bag'
  | 'book'
  | 'burger'
  | 'change_experience'
  | 'consultation'
  | 'contract'
  | 'email'
  | 'favorite'
  | 'gears'
  | 'gear_laptop'
  | 'gear_processes'
  | 'gear_web'
  | 'logo'
  | 'map'
  | 'money'
  | 'phone'
  | 'plus'
  | 'rhomb'
  | 'tg'
  | 'vk'
  | 'web_dev';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  analyst,
  arrow_left,
  arrow_bottom,
  arrow_circular,
  automation,
  bag,
  book,
  burger,
  change_experience,
  consultation,
  contract,
  email,
  favorite,
  gears,
  gear_laptop,
  gear_processes,
  gear_web,
  logo,
  map,
  money,
  phone,
  plus,
  rhomb,
  tg,
  vk,
  web_dev,
};
