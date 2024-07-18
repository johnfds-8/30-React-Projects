import "./App.css";
import { useState } from "react";

function App() {

const [isToggled,setisToggles] = useState(false);

  const handleChange = () =>{
    setisToggles (!isToggled);
  }

return(
   <div className="container">
   <h1>Toggle-Swich App</h1>
      <label >
      <input type="checkbox" className="box" onChange={handleChange}></input>
      </label>
      <p>{isToggled ? "On":"Off"}</p>
   </div>
)
}

export default App;