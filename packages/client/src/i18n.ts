import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./languages/ru.json";
import ua from "./languages/ua.json";
import en from "./languages/en.json";

// the translations
const resources = {
  ru: {
    translation: ru
  },
  ua: {
    translation: ua
  },
  en: {
    translation: en
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
