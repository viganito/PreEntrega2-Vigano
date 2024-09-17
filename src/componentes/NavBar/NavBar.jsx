import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {

  return (

    <header>
        <Link to="/">
          <img  className='logoAfterlife' src={"../img/afterlifelogo.jpg"} alt="Logo Afterlife" />
        </Link>
          <nav>
              <ul>
                  <li>
                    <NavLink to="/"> Home </NavLink>
                  </li>

                  <li>
                    <NavLink to="/categoria/shop"> Shop </NavLink> 
                  </li>

                  <li>
                   <NavLink to="/categoria/events"> Events </NavLink> 
                  </li>            
              </ul>
          </nav>

      <CartWidget/>
    </header>

  )
}

export default NavBar