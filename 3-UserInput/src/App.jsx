import './App.css';
import { useState } from 'react';

function App() { 

  const [input,setInput] =useState("");

  const userInput = (e) =>{
    setInput (e.target.value)
  }

  return (
<div className='container'>

      <h3 className='input'>User Input App</h3>

      <input type="text" className='user' onChange={userInput} />

      <p>User Input:{input}</p>
    </div>
  );
}

export default App;