import React from 'react';

export interface CardData {
  category?: string;
  date?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  bgColor?: string;
  textColor?: string;
  logo?: React.ReactNode;
  codeSnippet?: {
    lang: string;
    code: string;
  };
  linkText?: string;
  fullSpan?: boolean;
}

export interface FooterLinkColumn {
    title: string;
    links: { text: string; href: string; external?: boolean }[];
}

export interface SearchResult {
  text: string;
  sources: {
    uri: string;
    title: string;
  }[];
}