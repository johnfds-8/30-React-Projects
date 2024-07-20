import { useEffect,useState } from "react";

function App() {

  const [data,SetData]= useState(null);

  useEffect (() => {
    fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then((response)=> response.json())
    .then((json)=> SetData(json))
  
  },[]);


  return (
  <div>

   { data ? (
      <div>
          <h1>Title : {data.title}</h1>
          <h1>Info : {data.body}</h1>
      </div>
    ) : ( 
      <center>
        <h1>Loding..</h1>
      </center>
      
    )
     }

  </div>
  );
}

export default App;