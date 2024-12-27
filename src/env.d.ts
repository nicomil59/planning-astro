/// <reference types="astro/client" />

interface Window {
    cookieconsent: any;
    gtag: any;
    dataLayer: any;
  }
  
  declare const cookieconsent: any;
  declare function gtag(...args: any[]): void;