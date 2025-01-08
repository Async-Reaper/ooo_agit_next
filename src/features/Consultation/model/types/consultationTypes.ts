export type ThemeConsultationType =
    "Комплексная автоматизация бизнеса" | 
    "Разработка ПО" | 
    "Внедрение и сопровождение IT-систем" | 
    "Анализ и оптимизация бизнес-процессов";

export interface IConsultationBodyRequest {
   date: string;
   full_name: string;
   phone_number: string;
   theme: string;
}
