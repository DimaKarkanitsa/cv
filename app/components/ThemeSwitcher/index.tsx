import s from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  setTheme: (theme: string) => void
  theme: string
}
const ThemeSwitcher = ({ setTheme, theme }: ThemeSwitcherProps) => {
  const handleClick = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div className={s.wrap}>
      <div className={s.switch}>
        <label className={s.toggle}>
          <input type='checkbox' onClick={handleClick} />
          <span className={`${s.slider} ${s.round}`}></span>
        </label>
      </div>
    </div>
  )
}

export default ThemeSwitcher
