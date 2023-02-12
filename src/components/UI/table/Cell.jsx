import s from '../../../styles/table.module.scss'
import { Link } from 'react-router-dom'
import { useGetItemQuery } from '../../../redux/api/apiSlice'
import searchField from '../../../utils/searchField'
import FieldPlaceholder from './FieldPlaceholder'

const Cell = ({ type, id }) => {
   const { data, isLoading, isError, isFetching } = useGetItemQuery({ id, type: type })

   if (isLoading || isFetching) return <FieldPlaceholder />
   else if (isError) return <tr>Не вдалося завантажити...</tr>

   let cell = []

   if (type === 'plans') {
      const description = searchField(data.data, 'description')
      const amount = searchField(data.data, 'amount')
      const currency = searchField(data.data, 'currency')
      const owner = searchField(data.data, 'owner')
      const status = searchField(data.data, 'status')
      cell = [description, amount, currency, status, owner]
   } else if (type === 'tenders') {
      const procurementMethod = searchField(data.data, 'procurementMethod')
      const title = searchField(data.data, 'title')
      const owner = searchField(data.data, 'owner')
      const amount = searchField(data.data, 'amount')
      const currency = searchField(data.data, 'currency')
      cell = [title, amount, currency, procurementMethod, owner]
   }

   return (
      <tr>
         {cell.map((el, i) => {
            const isNumber = typeof el === 'number'
            return <td key={i}>{isNumber ? el.toLocaleString('en-US') : el}</td>
         })}
         <td>
            <Link to={`/${type}/${id}`} className={s.itemLink}>
               лiнк
            </Link>
         </td>
      </tr>
   )
}

export default Cell
