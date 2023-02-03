import s from '../../styles/sidebar.module.scss'
import { NavLink } from 'react-router-dom'

const PageBtn = ({ children, route }) => {
   return (
      <li className={s.link}>
         <NavLink className={({ isActive }) => (isActive ? 'text-blue-600' : '')} to={route}>
            {children}
         </NavLink>
      </li>
   )
}

export default PageBtn
