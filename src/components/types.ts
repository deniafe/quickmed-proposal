export interface Package {
  name: string;
  price: string;
  timeline: string;
  description: string;
  bestFor: string;
  recommended?: boolean;
}

export interface Feature {
  name: string;
  desc: string;
  mvp: boolean;
  standard: boolean;
  enterprise: boolean;
}

export interface FeatureSection {
  title: string;
  icon: React.ReactNode;
  features: Feature[];
}

export interface AppFeature {
  title: string;
  icon: React.ReactNode;
  color: string;
  sections: FeatureSection[];
}

export interface CostBreakdownItem {
  item: string;
  cost: string;
}
