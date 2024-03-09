import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        header: '84px',
        footer: '256px',
      },
      minHeight: {
        main: 'calc(100% - 84px - 256px)',
      },
      maxWidth: {
        container: '1440px',
      },
      backgroundColor: {
        header: 'var(--background-header)',
        footer: 'var(--background-footer)',
      },
      colors: {
        header: 'var(--text-header)',
        footer: 'var(--text-header)',
      },
    },
  },
  plugins: [],
}
export default config
