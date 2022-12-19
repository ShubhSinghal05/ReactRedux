import React, { useState } from 'react'
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
   
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        Cookies.set("user", "loginTrue")

        dispatch(login({
             name:name,
             email:email,
             password:password,
             loggedIn:true,
        }))
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Netmaxim Technologies</h1>
                <input type="name" placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="email" placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Login