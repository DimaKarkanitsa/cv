"use client"
import s from "./page.module.scss"
import PersonalInfo from "./components/PersonalInfo/index"
import Contacts from "./components/Contacts/index"
import About from "./components/About/index"
import Stack from "./components/Stack/index"
import Experience from "./components/Experience/index"
import Education from "./components/Education/index"

export default function Home() {
  return (
    <div className={s.wrap}>
      <PersonalInfo />
      <Contacts />
      <About />
      <Stack />
      <Experience />
      {/* <Education /> */}
    </div>
  )
}
