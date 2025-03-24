export interface IPlatforms {
  id: string;
  img: string;
  imgDescription: string;
  platformName: string;
  platformPrice: number;
  platformDescription: string[];
  benefitsDescription: string[];
  benefitsList?: string[];
  additionalInfo?: string;
}