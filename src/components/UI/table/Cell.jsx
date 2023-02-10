import { useGetItemQuery } from '../../../redux/api/apiSlice'
import FieldPlaceholder from './FieldPlaceholder'

const Cell = ({ type, id }) => {
   const { data, isLoading, isError } = useGetItemQuery({ id, type: type == 'plans' ? 'plans' : 'tenders' })

   if (isLoading) {
      return <FieldPlaceholder />
   } else if (isError) {
      return <p>-</p>
   }

   let cell = []
   if (type === 'plans') {
      const { description, amount, currency } = data.data.budget
      const { owner, status } = data.data
      cell = [description, amount, currency, status, owner]
   } else if (type === 'tenders') {
      const { procurementMethod, title, owner } = data.data
      const { amount, currency } = data.data.minimalStep
      cell = [title, amount, currency, procurementMethod, owner]
   }

   return (
      <tr>
         {cell.map(el => {
            const isNumber = typeof el === 'number'
            return <td key={el.id}>{isNumber ? el.toLocaleString('en-US') : el}</td>
         })}
      </tr>
   )
}

export default Cell
