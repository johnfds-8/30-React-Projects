import { useState } from "react"

function ItemsPeg({ items, itemPerPage }) {

  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastPage = currentPage * itemPerPage;
  const indexOfFirstPage = indexOfLastPage - itemPerPage;

  const currentItems =items.slice(indexOfFirstPage,indexOfLastPage)
   

  const pageNumbers = [];

  for(let i = 1;i <= Math.ceil(items.length / itemPerPage);i++){
    pageNumbers.push(i)
  }


  return (
    <div>

   <ul>
    {
      currentItems.map((item,index)=>(
        <li key={index}>{item}</li>
      ))
    }
   </ul> 
   {pageNumbers.map((number)=>(
      <li key={number} onClick={() => setCurrentPage(number)}> 
      {number}</li>
   ))}

    </div>
  )
}

export default ItemsPeg