import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(count * 0)
  }


  return (
    <div className="btn">
      <h1>Count App</h1>

      <button onClick={incrementCount} >+</button>

      <span>{count}</span>

      <button onClick={decrementCount}>-</button>

      <h1 className="reset" onClick={reset}>Reset</h1>

    </div>

  )
}

export default App
