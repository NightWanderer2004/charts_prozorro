import s from '../../styles/main.module.scss'

const PaginationBtn = ({ children, changePage }) => {
   return (
      <button className={s.paginationBtn} onClick={changePage}>
         {children}
      </button>
   )
}

export default PaginationBtn
