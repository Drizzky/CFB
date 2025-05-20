import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/Aura'
import { definePreset } from '@primevue/themes'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const fuckingtheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff4e6',
      100: '#ffe0b3',
      200: '#ffcc80',
      300: '#ffb84d',
      400: '#1E88E5',
      500: '#1565C0',
      600: '#0D47A1',
      700: '#0B3D8B',
      800: '#082C65',
      900: '#061F46',
    },
    secondary: {
      50: '#fff4e6',
      100: '#ffe0b3',
      200: '#ffcc80',
      300: '#ffb84d',
      400: '#FB8C00',
      500: '#E67C00',
      600: '#CC6E00',
      700: '#B35E00',
      800: '#8C4700',
      900: '#662F00',
    },
    surface: {
      0: '#000000',
      50: '#1a1a1a',
      100: '#1a1a1a',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#1E88E5',
          inverseColor: '#ffffff',
          hoverColor: '#1565C0',
          activeColor: '#0D47A1',
        },
        secondary: {
          color: '#FB8C00',
          inverseColor: '#ffffff',
          hoverColor: '#E67C00',
          activeColor: '#CC6E00',
        },
        highlight: {
          background: '#fff4e6',
          focusBackground: '#ffe0b3',
          color: '#8c5900',
          focusColor: '#664000',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: fuckingtheme,
    prefix: 'p',
    darkModeSelector: 'none',
    cssLayer: false,
  },
})

app.mount('#app')
