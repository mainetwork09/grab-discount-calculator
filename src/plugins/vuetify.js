import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: false,
  },
  breakpoint: {
    thresholds: {
      xs: 320,
      sm: 540,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    scrollBarWidth: 24,
  }
});
