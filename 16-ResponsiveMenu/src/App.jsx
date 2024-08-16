import { useState } from 'react'

import './App.css'

function App() {
  const [isOpen,setIsOpen] = useState (false)
 
  const openToggle = () => {
       setIsOpen(!isOpen)
  }
  return (
   <>
   <button className='menu-icon' onClick={openToggle}>
     ☰
   </button>
   <ul className={`menu ${isOpen ?'open':'' }`}>
        <li>Home</li>
        <li>Service</li>
        <li>Projects</li>
        <li>Contacts</li>
   </ul>
   </>
  )
}

export default App
