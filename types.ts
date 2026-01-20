export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: 'ceremony' | 'cocktail' | 'dinner' | 'party';
}

export interface RSVPData {
  name: string;
  email: string;
  attendance: 'yes' | 'no';
  guests: number;
  dietaryRestrictions: string;
  message: string;
}

export enum Tone {
  FORMAL = 'Formal',
  EMOTIONAL = 'Emotivo',
  FUNNY = 'Divertido',
  SHORT = 'Breve'
}

export interface WishRequest {
  tone: Tone;
  relationship: string;
  coupleNames: string;
}
