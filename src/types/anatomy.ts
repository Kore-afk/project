export interface AnatomyPart {
  id: string;
  name: string;
  position: string;
  description: string;
  recommendations: string[];
}

export interface AnatomySystem {
  id: 'skeletal' | 'cardiovascular' | 'digestive' | 'nervous';
  name: string;
  image: string;
  parts: AnatomyPart[];
}