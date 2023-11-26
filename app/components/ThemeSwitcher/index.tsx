import { useState } from "react"
import s from "./ThemeSwitcher.module.scss"

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light")

  return (
    <div className={s.wrap}>
      <div className={s.switch}>
        <label className={s.toggle}>
          <input type='checkbox' />
          <span className={`${s.slider} ${s.round}`}></span>
        </label>
      </div>
    </div>
  )
}

export default ThemeSwitcher
