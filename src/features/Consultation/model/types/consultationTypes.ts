export enum ThemeConsultationType {
  AUTOMATION = "Комплексная автоматизация бизнеса",
  DEVELOPMENT_SOFTWARE = "Разработка ПО",
  IMPLEMENTATION_AND_SUPPORT = "Внедрение и сопровождение IT-систем",
  ANALYSIS = "Анализ и оптимизация бизнес-процессов",
  OTHER = "Другое",
  DEFAULT = "Интересующая услуга"
}
export interface IConsultationBodyRequest {
  full_name: string;
  phone_number: string;
  theme: ThemeConsultationType;
}
