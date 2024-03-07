import React, { useEffect } from 'react'
import { LOCAL_KEY } from '../constants'

const useTheme = () => {
  const [theme, setTheme] = React.useState<string>('light')
  const [darkQuery, setDarkQuery] = React.useState<MediaQueryList | any>();

  const handleSelectTheme = (theme: string) => {
    setTheme(theme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_KEY.LTheme);
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(window.matchMedia('(prefers-color-scheme: dark)'));
      
      setDarkQuery(window.matchMedia('(prefers-color-scheme: dark)'))
      darkQuery && darkQuery.addEventListener('change', (e: any) => {
        if (!('LTheme' in localStorage)) {
          if (e.matches) {
            document.querySelectorAll('html')[0].dataset.theme = 'dark'
          } else {
            document.querySelectorAll('html')[0].dataset.theme = 'light'
          }
        }
      })
    
    }
  }, [])

  React.useEffect(() => {
    switch (theme) {
      case 'light':
        document.querySelectorAll('html')[0].dataset.theme = theme
        localStorage.setItem('LTheme', theme)
        break
      case 'dark':
        document.querySelectorAll('html')[0].dataset.theme = theme
        localStorage.setItem('LTheme', theme)
        break
      default:
        localStorage.removeItem('LTheme')
        onWindowMatch()
        break
    }
  }, [theme, darkQuery])

  const onWindowMatch = () => {
    if (
      localStorage.getItem('LTheme') === 'dark' ||
      (!('LTheme' in localStorage) && darkQuery.matches)
    ) {
      document.querySelectorAll('html')[0].dataset.theme = 'dark'
    } else {
      document.querySelectorAll('html')[0].dataset.theme = 'light'
    }
  }
  return { theme, handleSelectTheme }
}

export default useTheme
