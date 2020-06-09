import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./ru.json";
import ua from "./ua.json";
import en from "./en.json";

export enum Langs {
  RU = "ru",
  UA = "ua",
  EN = "en"
}

const resources = {
  [Langs.RU]: {
    translation: ru
  },
  [Langs.UA]: {
    translation: ua
  },
  [Langs.EN]: {
    translation: en
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: Langs.RU,
  fallbackLng: Langs.RU,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
