import s from '../../../styles/table.module.scss'
import Cell from './Cell'
import ErrorText from '../ErrorText'
import PaginationBtn from '../PaginationBtn'
import TablePlaceholder from './TablePlaceholder'

const DataTable = ({ type, data, isLoading, isError, isFetching, setPage }) => {
   let header
   if (type === 'plans') header = ['Опис', 'Сума', 'Валюта', 'Статус', 'Власник', 'Деталi']
   else if (type === 'tenders') header = ['Назва', 'Крок', 'Валюта', 'Закупівлі', 'Власник', 'Деталi']

   let content
   if (isLoading || isFetching) return <TablePlaceholder />
   else if (isError) return <ErrorText>Щось пішло не так :(</ErrorText>
   else if (data.data.length === 0) content = <ErrorText>Немає даних</ErrorText>
   else content = data.data.map((el, i) => <Cell key={i} type={type} id={el.id} />)

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
               <tbody>{content}</tbody>
            </table>
         </div>
         <div className='flex gap-x-2'>
            {data.prev_page && <PaginationBtn changePage={() => setPage(`&offset=${data.prev_page.offset}`)}>Назад</PaginationBtn>}
            {data.next_page && <PaginationBtn changePage={() => setPage(`&offset=${data.next_page.offset}`)}>Далi</PaginationBtn>}
         </div>
      </div>
   )
}

export default DataTable
