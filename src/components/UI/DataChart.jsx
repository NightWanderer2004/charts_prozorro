import { usePlansQuery } from '../../redux/api/apiSlice'

const DataChart = () => {
   const { data, isLoading, isSuccess, isError, error } = usePlansQuery()

   return <div>{isLoading ? <div className='animate-pulse rounded-md w-full h-[650px] bg-neutral-300'></div> : console.log(data)} </div>
}

export default DataChart
