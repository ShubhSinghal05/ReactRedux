import React, { useState,useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import AuthApi from './AuthApi';
import Cookies from 'js-cookie';


function App() {
  const [auth, setAuth] = useState(false)
  const ReadCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true)
    }
  }

  React.useEffect(() => {
    ReadCookie()
  }, [])
  return (
    <div>
      <AuthApi value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi>
    </div>
  )
}


// login
const Login = () => {
  const Auth = useContext(AuthApi)
  const handleLogin = () => {
    Auth.setAuth(true)
    Cookies.set("user", "loginTrue")
  }
  return (
    <div>
      <h1>Netmaxim Technologies</h1>

      <button onClick={()=>handleLogin}>Login</button>
    </div>
  )
}

const Dashboard = () => {
  const Auth = useContext(AuthApi)
  const handleLogin = () => {
    Auth.setAuth(false)
    Cookies.remove("user")
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={()=>handleLogin}>LogOut</button>
    </div>
  )
}

const Routes = () => {
  const Auth =  useContext(AuthApi)
  return (
    <Switch>
      <ProtectedLogin path="/login" auth={Auth.auth} component={Login} />
      <ProtectedRoutes path="/dashboard" auth={Auth.auth} component={Dashboard} />

    </Switch>
  )
}


const ProtectedRoutes = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => auth ? (
        <Component />
      )
        :
        (
          <Redirect to="/login" />
        )
      }
    />
  )
}

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => !auth ? (
        <Component />
      )
        :
        (
          <Redirect to="/dashboard" />
        )
      }
    />
  )
}
export default App