import s from '../../styles/sidebar.module.scss'
import PageBtn from '../UI/PageBtn'

const Sidebar = () => {
   return (
      <aside className={s.sidebar}>
         <ul className={s.links}>
            <PageBtn route='/dashboard'>[=] Dashboard</PageBtn>
            <PageBtn route='/orders'>[=] Orders</PageBtn>
         </ul>
      </aside>
   )
}

export default Sidebar
