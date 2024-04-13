import i18next from 'i18next';
import { menu as enMenu } from '../locales/en/menu';
import { menu as itMenu } from '../locales/it/menu';

const DEFAULT_LANGUAGE_OVERRIDE = '';

/**
 * i18next is a localization library for maintaining and using translation resources.
 * 
 * Q: How do I add a new language?
 * A: To add a new language, create a new folder in the locales directory with the language code.
 *    Each language folder should contain a file for each namespace (ex. menu.ts) with the translations.
 * 
 * Q: How do I add a new namespace?
 * A: To add a new namespace, create a new file in each language folder with the translations.
 *    Then update the `resources` field in the init() call and the CustomTypeOptions interface.
 */

i18next.init({
  lng: DEFAULT_LANGUAGE_OVERRIDE ? DEFAULT_LANGUAGE_OVERRIDE : 'en',
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      menu: enMenu,
    },
    it: {
      menu: itMenu,
    }
  },
});

// Module declared to make referencing keys in the localization files type-safe.
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      menu: typeof enMenu;
    };
  }
}

export default i18next;
