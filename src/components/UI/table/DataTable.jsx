import s from '../../../styles/table.module.scss'
import { useGetPlansQuery } from '../../../redux/api/apiSlice'
import PlanItem from './PlanItem'

const DataTable = () => {
   const { data, isLoading, isError } = useGetPlansQuery()

   const header = ['Descirption', 'Amount', 'Currency', 'Status', 'Owner']

   if (isLoading) {
      return <div className='animate-pulse rounded-md w-full h-[565px] bg-neutral-300'></div>
   } else if (isError) {
      return <p>Something went wrong</p>
   }

   return (
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
               {data.data.slice(0, 15).map(el => (
                  <PlanItem key={el.id} id={el.id} />
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default DataTable
