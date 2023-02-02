import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../../styles/navbar.module.scss'

const Navbar = () => {
   return (
      <nav className={s.navbar}>
         <NavLink to='/dashboard'>
            <h3 className={s.logo}>Softlist</h3>
         </NavLink>
      </nav>
   )
}

export default Navbar
