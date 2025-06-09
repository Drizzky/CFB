import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/Aura'
import { definePreset } from '@primevue/themes'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const minimalTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f9f9f9',
      100: '#e6e6e6',
      200: '#cccccc',
      300: '#b3b3b3',
      400: '#999999',
      500: '#808080',
      600: '#666666',
      700: '#4d4d4d',
      800: '#333333',
      900: '#1a1a1a',
    },
    secondary: {
      50: '#ffffff',
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#bfbfbf',
      400: '#a6a6a6',
      500: '#8c8c8c',
      600: '#737373',
      700: '#595959',
      800: '#404040',
      900: '#262626',
    },
    surface: {
      0: '#ffffff',
      50: '#f9f9f9',
      100: '#f2f2f2',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#000000',
          inverseColor: '#ffffff',
          hoverColor: '#333333',
          activeColor: '#1a1a1a',
        },
        secondary: {
          color: '#666666',
          inverseColor: '#ffffff',
          hoverColor: '#4d4d4d',
          activeColor: '#333333',
        },
        highlight: {
          background: '#f2f2f2',
          focusBackground: '#e6e6e6',
          color: '#000000',
          focusColor: '#262626',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: minimalTheme,
    prefix: 'p',
    darkModeSelector: 'none',
    cssLayer: false,
  },
})

app.mount('#app')
