export const SUPPORTED_LOCALES = ["en"] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const SITE_CONFIG = {
    name: 'StorWay',
    domain: 'storway.com',
    defaultTitle: 'StorWay | Intelligent Retail with Smartest Shopping Cart',
    defaultDescription: 'We are assisting French and European retail chains in the delivery of new digital retail opportunities.'
} as const;