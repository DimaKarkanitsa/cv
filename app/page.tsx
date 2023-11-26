"use client"
import s from "./page.module.scss"
import PersonalInfo from "./components/PersonalInfo/index"
import Contacts from "./components/Contacts/index"
import About from "./components/About/index"
import Stack from "./components/Stack/index"
import Experience from "./components/Experience/index"
import Education from "./components/Education/index"
import { createContext, useState } from "react"
import ThemeSwitcher from "./components/ThemeSwitcher"

const ThemeContext = createContext("light")

export default function Home() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={theme}>
      <div className={s.wrap}>
        <ThemeSwitcher />
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
