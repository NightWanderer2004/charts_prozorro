import s from '../../styles/navbar.module.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   return (
      <nav className={s.navbar}>
         <NavLink to='/'>
            <h3 className={s.logo}>MarketFlow</h3>
         </NavLink>
      </nav>
   )
}

export default Navbar
