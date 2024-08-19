import './App.css'
import Switch from './componts/Switch/Switch'
import SwitchCom from './componts/SwitchCom'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <>


      <ThemeProvider>
        <div className='App'></div>
        <Switch />
        <SwitchCom />
      </ThemeProvider>
    </>
  )
}

export default App;
