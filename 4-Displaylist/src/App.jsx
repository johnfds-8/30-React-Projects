import "./App.css";


function App() {
  const items = [
    "car", "truck", "cycle", "bike", "scooty"
  ]

return (
<div>
  <ul>
    {items.map((item,index)=>{
       return <li key={index}>{item}</li>
    })}
  </ul>
</div>
)
}

export default App;