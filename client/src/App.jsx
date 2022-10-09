import Home from "./screens/Home/Home.jsx";
import Login from "./screens/Login/Login.jsx";
import React, {useState} from "react";

export const UserContext = React.createContext({});

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={user}>
      {!isAuth &&
        <Login setAuth={setIsAuth} setUser={setUser}/>
      }

      {isAuth &&
        <Home />
      }
    </UserContext.Provider>
  )
}


export default App
