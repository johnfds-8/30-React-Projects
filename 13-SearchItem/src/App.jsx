import Search from "./Search";

function App () 
{
  const items = ["itme","App","Row","home"]


  return (
    <div>
     <Search items={items}></Search>
    </div>
  )
}

export default App;