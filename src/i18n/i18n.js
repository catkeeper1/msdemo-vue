import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import zh_CN from './langs/zh_CN'
import zh_TW from './langs/zh_TW'
import en_US from './langs/en_US'
import enLocale from 'element-ui/lib/locale/lang/en'
import tcLocale from 'element-ui/lib/locale/lang/zh-TW'
import scLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n);


const messages = {
  en_US: Object.assign(en_US, enLocale),
  zh_TW: Object.assign(zh_TW, tcLocale),
  zh_CN: Object.assign(zh_CN, scLocale),
  
};

var lang = sessionStorage.getItem('lang');

if(lang != 'en_US' && lang != 'zh_TW' && lang != 'zh_CN') {
  lang = 'en_US';
}

const i18n = new VueI18n({
  //暂时只使用中文所以永远返回zh。
  locale: lang,
  messages
});


locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n