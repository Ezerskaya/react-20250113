import { Button } from '../button/Button.jsx'
import { use } from 'react'
import { ThemeContext } from '../theme-context'

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext)
  const themeIcons = theme === 'light' ? 'dark' : 'light'

  return (
    <Button onClick={toggleTheme}
            viewVariant="icon"
            title={'Switch theme'}
            icon={<img src={`../../../${themeIcons}.png`} alt="icons button"/>}/>
  )
}