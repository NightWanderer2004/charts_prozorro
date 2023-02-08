import { useGetPlansItemQuery } from '../../../redux/api/apiSlice'
import FieldPlaceholder from './FieldPlaceholder'

const Cell = ({ id, index }) => {
   const { data, isLoading, isError } = useGetPlansItemQuery(id)

   if (isLoading) {
      return <FieldPlaceholder />
   } else if (isError) {
      return <p>-</p>
   }
   const { description, amount, currency } = data.data.budget
   const { owner, status } = data.data

   const cell = [description, amount, currency, status, owner]

   return (
      <tr>
         {cell.map(el => {
            const isNumber = typeof el === 'number'
            if (el == description) {
               el = `${index}.\t${description}`
            }

            return <td key={el.id}>{isNumber ? el.toLocaleString('en-US') : el}</td>
         })}
      </tr>
   )
}

export default Cell
