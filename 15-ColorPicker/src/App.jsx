import { useState } from 'react'
import './App.css'

function App() {
  const [selectedColor, setSelectedColor] = useState('#00000');
  const [selectedTextColor, setSelectedTextColor] = useState('#00000');

  const handleChange = (e) => {
    setSelectedColor(e.target.value)
  }

  const textChangeColor = (e) => {
    setSelectedTextColor(e.target.value)
  }

  return (
    <div>
      <div className='colorPicker' style={{ padding: "10px" }}>
        <input type='color' onChange={handleChange}></input>
        <div style={{ height: "100px", width: "100px", backgroundColor: selectedColor }}></div>
      </div>


      <div className='textColor' style={{ padding: "10px" }}>
        <input type='text' onChange={textChangeColor}>
        </input>
        <div style={{ height: "100px", width: "100px", backgroundColor: selectedTextColor }}>
        </div>
      </div>
    </div>
  )
}

export default App
