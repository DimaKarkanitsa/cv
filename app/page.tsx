"use client"
import s from "./page.module.scss"
import PersonalInfo from "./components/PersonalInfo/index"
import { Contacts } from "./components/Contacts/index"
import About from "./components/About/index"
import Stack from "./components/Stack/index"
import Experience from "./components/Experience/index"
import Education from "./components/Education/index"
import { createContext, useEffect, useState } from "react"
import ThemeSwitcher from "./components/ThemeSwitcher"
import useBodyClass from "./hooks/useBodyClass"

const ThemeContext = createContext("light")

export default function Home() {
  const [theme, setTheme] = useState("light")
  useBodyClass(theme)
  return (
    <ThemeContext.Provider value={theme}>
      <div className={s.wrap}>
        <ThemeSwitcher setTheme={setTheme} theme={theme} />
        <PersonalInfo />
        <Contacts />
        <About />
        <Stack />
        <Experience />
        {/* <Education /> */}
      </div>
    </ThemeContext.Provider>
  )
}
