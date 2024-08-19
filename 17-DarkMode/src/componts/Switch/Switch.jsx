import { useTheme } from "../../context/ThemeContext";

function Switch() {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
   <label>
    <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}>
          
    </input>
    DarkMode
   </label>

    </div>
  )
}

export default Switch;