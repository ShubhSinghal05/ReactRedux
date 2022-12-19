import React from 'react'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { selectUser } from '../features/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


const Logout = () => {
  const user = useSelector(selectUser)


  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault();
    Cookies.remove("user")

    dispatch(logout())
  }
  return (
    <div>
      <h1>Play video</h1>
      <Container>
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
        </div>
      </Container>
      <button onClick={(e) => handleClick(e)}>Logout</button>
    </div>
  )
}

export default Logout