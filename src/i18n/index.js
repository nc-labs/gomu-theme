import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import storage from 'utils/storage'

const DEFAULT_LANGUAGE = 'vi'

storage.getItem('i18nextLng') || storage.setItem('i18nextLng', DEFAULT_LANGUAGE)

const resources = {
  en: {},
  vi: {
    common: require('./libs/vi/common.json'),
    components: require('./libs/vi/components.json'),
    navigator: require('./libs/vi/navigator.json'),
    page: {
      books: require('./libs/vi/pages/books.json'),
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
