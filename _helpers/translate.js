import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
  ru: {
    translation: {
      setting_tab_menu: "Настройки",
    },
  },
  kk: {
    translation: {
      setting_tab_menu: "Параметрлер",
    },
  },
};
const start = async () => {
  let init = async () => {
    let language = "ru";
    if (await AsyncStorage.getItem("lang")) {
      language = await AsyncStorage.getItem("lang");
      moment.locale(language);
    }
    i18next.use(initReactI18next).init({ resources, lng: language });
  };
  await init();
};
start();
export const addTranslation = (translations) => {
  for (const lang of Object.keys(translations)) {
    i18next.addResources(lang, "translation", translations[lang]);
  }
};
