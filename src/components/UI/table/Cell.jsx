import { useGetPlansItemQuery } from '../../../redux/api/apiSlice'
import FieldPlaceholder from './FieldPlaceholder'

const Cell = ({ id }) => {
   const { data, isLoading, isError } = useGetPlansItemQuery(id)

   if (isLoading) {
      return <FieldPlaceholder />
   } else if (isError) {
      return <p>-</p>
   } else {
      const { description, amount, currency } = data.data.budget
      const { owner, status } = data.data

      const cell = [id, description, amount, currency, status, owner]

      return (
         <tr role='checkbox' tabIndex={-1}>
            {cell.map((el, i) => {
               const value = cell[i]
               if (value == id) return

               return <td key={el.id}>{typeof value === 'number' ? value.toLocaleString('en-US') : value}</td>
            })}
         </tr>
      )
   }
}

export default Cell
