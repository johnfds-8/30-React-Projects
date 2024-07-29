import { useState } from "react"

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistred, setIsRegistred] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [users,setUsers ] = useState([]);

  const handlAuth = ()  =>{
    if (isRegistred){
    //LogIn
     if (isRegistred) {
      const user = users.find((u) => u.email === email && u.password === password);
      if(user) {
        setIsLogedIn(true);
      }else {
        alert('login failed.Please Check Your credential')
      }
     }

    }else {
     //Register
     const newUser = {email,password};
      setUsers([...users,newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      setIsLogedIn(true);
    }
  }
  const handleLogout = () => {
    setIsLogedIn(false);
    setEmail('');
    setPassword('');
  }

  return (
    <div>

      {

        isLogedIn ? (
          <div>
            <h2>Welcome, {email}</h2>
            <button onClick={handleLogout}>LogOut</button>
          </div>
        ) : (
          <div>
            <h2>
              {isRegistred ? 'LogIn' : 'Register'}
            </h2>
            <form>
                <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}></input>
                <br /><br />

                <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                <br /><br />

              <button onClick={handlAuth}>
                {isRegistred ? 'Login' : 'Register'}
              </button>

            </form>

            <p>
              {isRegistred ? "Dont have an account ? Registred now " : "You hav an account      Login now"}
            </p>
            <button onClick={() => setIsRegistred(!isRegistred)}>
              {isRegistred ? ' Register' : 'LogIn'}
            </button>


          </div>
        )
      }
    </div>
  )
}

export default App
