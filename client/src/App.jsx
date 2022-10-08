import Home from "./screens/Home/Home.jsx";
import Login from "./screens/Login/Login.jsx";
import {useState} from "react";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  return (
    <>
      {!isAuth &&
        <Login setAuth={setIsAuth} setUser={setUser}/>
      }

      {isAuth &&
        <Home />
      }
    </>
  )
}


export default App
