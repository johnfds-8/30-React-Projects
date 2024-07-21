import { useState } from "react"

function App() {


  const [backgroundColor, setbackgroundColor] = useState('black')

  const handleChange = () =>{
   const newColor = backgroundColor === 'black' ? 'red' : 'yellow' ;
   setbackgroundColor(newColor)
  }

  return (
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      alignContent:"space-around",
      flexDirection:"column"
    }}>

    <div style={{
      backgroundColor,
      height: "200px",
      width: "200px",
      cursor: "pointer",
      
    }}>
    </div>
      <button onClick={handleChange}> Chnage Color</button>
    </div>
  )
}

export default App
