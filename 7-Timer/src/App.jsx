import { useEffect, useState } from 'react';


function App() {

  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time])

  return (
    <div>
      <center>Timer Left :{time} seconds

      </center>


    </div>
  )
}

export default App
