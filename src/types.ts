export interface TrainingProgram {
  id: string;
  num: string;
  title: string;
  tags: string;
  image: string;
  level: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  tag: string;
  date: string;
  title: string;
  snippet: string;
  fullContent?: string;
  image: string;
  readTime: string;
}

export interface StepItem {
  id: string;
  num: string;
  title: string;
  description: string;
  detail: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice?: number;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
}
