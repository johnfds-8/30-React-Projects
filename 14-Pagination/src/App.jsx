import ItemsPeg from "./componets/ItemsPeg"

function App() {

  const items = ["item1", "item2", "item3", "item5", "item6",]

  return (
  <>
   <ItemsPeg items={items} itemPerPage={2}></ItemsPeg>
  </>
  )
}
export default App

