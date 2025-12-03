import React from 'react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface PricingTier {
  name: string;
  price: number;
  customPrice?: string;
  description: string;
  features: string[];
  recommended?: boolean;
  buttonText?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}