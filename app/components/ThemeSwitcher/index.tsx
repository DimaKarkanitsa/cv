import s from "./ThemeSwitcher.module.scss"

const ThemeSwitcher = () => (
  <div className={s.wrap}>
    <div className={s.switch}>
      <label className={s.toggle}>
        <input type='checkbox' />
        <span className={`${s.slider} ${s.round}`}></span>
      </label>
    </div>
  </div>
)

export default ThemeSwitcher
