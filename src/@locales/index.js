import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const DEFAULT_LANGUAGE = 'vi'

localStorage.getItem('i18nextLng') || localStorage.setItem('i18nextLng', DEFAULT_LANGUAGE)

const resources = {
  en: {},
  vi: {
    common: require('./libs/vi/common.json'),
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
