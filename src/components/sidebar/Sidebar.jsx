import s from '../../styles/sidebar.module.scss'
import PageBtn from '../UI/PageBtn'

const Sidebar = () => {
   return (
      <aside className={s.sidebar}>
         <ul className={s.links}>
            <PageBtn route='/plans'>
               <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'>
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
               </svg>
               Плани
            </PageBtn>
            <PageBtn route='/tenders'>
               <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'>
                  <path d='M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z' />
               </svg>
               Тендери
            </PageBtn>
         </ul>
      </aside>
   )
}

export default Sidebar
