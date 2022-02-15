import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import storage from 'modules/storage'
import { initReactI18next } from 'react-i18next'

const DEFAULT_LANGUAGE = 'vi'

storage.getItem('i18nextLng') || storage.setItem('i18nextLng', DEFAULT_LANGUAGE)

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
