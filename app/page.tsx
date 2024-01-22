'use client'
// import s from '../public/styles/page.module.css'
import PersonalInfo from './components/PersonalInfo/index'
import { Contacts } from './components/Contacts/index'
import About from './components/About/index'
import Stack from './components/Stack/index'
import Experience from './components/Experience/index'
// import Education from './components/Education/index'
import { createContext, useState } from 'react'
import ThemeSwitcher from './components/ThemeSwitcher'
import useBodyClass from './hooks/useBodyClass'

function Home() {
  const ThemeContext = createContext('light')
  const [theme, setTheme] = useState('light')
  useBodyClass(theme)
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcher setTheme={setTheme} theme={theme} />
      <PersonalInfo />
      <Contacts />
      <About />
      <Stack />
      <Experience />
      {/* <Education /> */}
    </ThemeContext.Provider>
  )
}
export default Home
