import * as React from 'react';
import {SVGAttributes} from 'react';
import {AddressIcon as address} from './Address';
import {AutoIcon as auto} from './Auto';
import {BagIcon as bag} from './Bag';
import {BookIcon as book} from './Book';
import {CalendarIcon as calendar} from './Calendar';
import {ChangeExperienceIcon as change_experience} from './ChangeExperience';
import {CompanyIcon as company} from './Company';
import {ContractIcon as contract} from './Contract';
import {EmailIcon as email} from './Email';
import {EmployeesIcon as employees} from './Employees';
import {EnIcon as en} from './En';
import {ExportIcoIcon as export_ico} from './ExportIco';
import {FolderIcon as folder} from './Folder';
import {ManagerIcon as manager} from './Manager';
import {MapsIcon as maps} from './Maps';
import {MoneyIcon as money} from './Money';
import {NotificationIcon as notification} from './Notification';
import {PlusIcon as plus} from './Plus';
import {ProfitIcon as profit} from './Profit';
import {RuIcon as ru} from './Ru';
import {SalesIcon as sales} from './Sales';
import {StarIcon as star} from './Star';
import {TelephoneIcon as telephone} from './Telephone';
import {TimeIcon as time} from './Time';
import {VatIcon as vat} from './Vat';
import {WebIcon as web} from './Web';

export type IconName =
  | 'address'
  | 'auto'
  | 'bag'
  | 'book'
  | 'calendar'
  | 'change_experience'
  | 'company'
  | 'contract'
  | 'email'
  | 'employees'
  | 'en'
  | 'export_ico'
  | 'folder'
  | 'manager'
  | 'maps'
  | 'money'
  | 'notification'
  | 'plus'
  | 'profit'
  | 'ru'
  | 'sales'
  | 'star'
  | 'telephone'
  | 'time'
  | 'vat'
  | 'web';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  address,
  auto,
  bag,
  book,
  calendar,
  change_experience,
  company,
  contract,
  email,
  employees,
  en,
  export_ico,
  folder,
  manager,
  maps,
  money,
  notification,
  plus,
  profit,
  ru,
  sales,
  star,
  telephone,
  time,
  vat,
  web,
};
