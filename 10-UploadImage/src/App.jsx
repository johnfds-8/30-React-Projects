import { useState } from 'react'

import './App.css'

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile)

  }



  return (
    <div>
      <input type='file' accept='image/*' onChange={handleFileChange}></input>


      {file && <img
        style={{ height: "auto", width: "200px" }}
        src={URL.createObjectURL(file)} alt='Uploaded' />}
    </div>
  )
}

export default App
