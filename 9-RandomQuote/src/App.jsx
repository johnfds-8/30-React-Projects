
import './App.css'

function App() {


  const quotes = ["The only thing we have to fear is fear itself.", "Courage is being scared to death, but saddling up anyway.", "If you cannot do great things, do small things in a great way.", "Well done is better than well said.", "The way to get started is to quit talking and begin doing."," Keep calm and carry on."] 

const randomIndex = Math.floor(Math.random()*quotes.length);
const quote =quotes[randomIndex];


  return (
   <div>
       {quote}
   </div>
  )
}

export default App
