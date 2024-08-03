import { useState } from "react";

function Search({ items }) {

  const [searchTerm, setSearchTerm] = useState("")

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const inputValue = (e) => {
    setSearchTerm(e.target.value)
  };

  return (
    <div>

      <input type="text" placeholder="Searching" onChange={inputValue} />

      <ul>
       {filterItems.map((item,index)=> (
         <li key={index}>
          {item}
         </li>
       ))}
      </ul>
    </div>
  )

}

export default Search;