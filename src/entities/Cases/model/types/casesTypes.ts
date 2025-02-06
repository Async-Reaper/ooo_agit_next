export enum CaseTypes {
  AUTOMATION = "Автоматизация",
  WEB_TECH = "Web-технологии",
  INTEGRATION = "Интеграция"
}

export interface ICase {
  id: string;
  title: string;
  result: string;
  img?: string;
  type: CaseTypes;
}
