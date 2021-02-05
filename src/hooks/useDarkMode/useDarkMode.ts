import { useLayoutEffect, useState } from 'react'

interface DarkModeProps {
  isDarkMode: boolean
  changeMode: () => void
}

export const useDarkMode = (): DarkModeProps => {
  const Theme = {
    dark: 'dark',
    light: 'light'
  } as const

  const [isDarkMode, setDarkMode] = useState(false)

  const changeThemeAttributes = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('class', theme)
    localStorage.setItem('theme', theme)
  }

  const changeMode = () => {
    setDarkMode(!isDarkMode)
    changeThemeAttributes(isDarkMode ? Theme.light : Theme.dark)
  }

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === Theme.dark)
      changeThemeAttributes(savedTheme)
    } else {
      const currentDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(currentDarkMode)
      changeThemeAttributes(currentDarkMode ? Theme.dark : Theme.light)
    }
  }, [])

  return { isDarkMode, changeMode }
}
