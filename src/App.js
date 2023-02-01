import React from 'react'
import Routing from './Routing/Routing'
import {Link} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <nav>
            <ul type='none'>
              <Link to='/'> <li>Home</li> </Link>
                <Link to='/student'><li>Students</li></Link>
                <Link to='/contact'><li>Contact Us</li></Link>
            </ul>
        </nav>
      <Routing/>
    </div>
  )
}

export default App