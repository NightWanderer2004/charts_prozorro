import s from '../../../styles/table.module.scss'
import Cell from './Cell'
import ErrorText from '../ErrorText'
import PaginationBtn from '../PaginationBtn'

const DataTable = ({ data, isLoading, isError, setPage }) => {
   const header = ['Descirption', 'Amount', 'Currency', 'Status', 'Owner']
   let content

   const handleChangePage = path => {
      const index = path.indexOf('?')
      path = path.substring(index + 1)
      setPage(path)
   }

   if (isLoading) {
      return <div className='animate-pulse rounded-md w-full h-[565px] bg-neutral-300'></div>
   } else if (isError) {
      return <ErrorText>Something went wrong</ErrorText>
   } else if (data.data.length === 0) {
      content = <ErrorText>Data is empty</ErrorText>
   } else {
      content = data.data.slice(0, 15).map((el, i) => <Cell key={el.id} id={el.id} index={++i} />)
   }

   return (
      <div>
         <div className={s.container}>
            <table>
               <thead>
                  <tr>
                     {header.map(el => (
                        <th key={el}>{el}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {content}
                  {/* {data.data.slice(0, 15).map((el, i) => (
                     <Cell key={el.id} id={el.id} index={++i} />
                  ))} */}
               </tbody>
            </table>
         </div>
         <div className='flex gap-x-2'>
            {data.prev_page && <PaginationBtn changePage={() => handleChangePage(data.prev_page.path)}>Back</PaginationBtn>}
            {data.next_page && <PaginationBtn changePage={() => handleChangePage(data.next_page.path)}>Next</PaginationBtn>}
         </div>
      </div>
   )
}

export default DataTable
