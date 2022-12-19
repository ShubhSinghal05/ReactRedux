import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Login from './Components/Login'
import { selectUser } from './features/userSlice'
import Logout from './Components/Logout'
import Cookies from 'js-cookie';


function App() {
    const user = useSelector(selectUser)
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
        
            {user ? <Logout /> : <Login />}
            </div>
    )
}

export default App