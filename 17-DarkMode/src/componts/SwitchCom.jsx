import { useTheme } from "../context/ThemeContext"
import './Switch/Switch.css'

function SwitchCom() {
  const { isDarkMode } = useTheme();


  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={`container ${themeClass}`}>
      theme componts Selelcted Theme
    </div>
  )
}

export default SwitchCom;