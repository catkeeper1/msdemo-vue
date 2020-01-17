import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import zh from './langs/zh'
import en from './langs/en'
import enLocale from 'element-ui/lib/locale/lang/en'
import tcLocale from 'element-ui/lib/locale/lang/zh-TW'


Vue.use(VueI18n);
console.log(en);


const messages = {
  en: Object.assign(en, enLocale),
  zh: Object.assign(zh, tcLocale),
  
};
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || (window.navigator.language.indexOf('zh') < 0 ? 'en' : 'zh'),
  messages
});


locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n