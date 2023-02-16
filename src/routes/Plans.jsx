import { useState } from 'react'
import Line from '../components/UI/Line'
import DataTable from '../components/UI/table/DataTable'
import Title from '../components/UI/Title'
import { useGetPageQuery } from '../redux/api/apiSlice'

const Plans = () => {
   const [page, setPage] = useState('')
   const limit = 15
   const { data, isLoading, isError, isFetching } = useGetPageQuery({ page, type: 'plans', limit: `?limit=${limit}` })

   return (
      <div>
         <Title>Плани</Title>
         <Line />
         <DataTable type='plans' data={data} isLoading={isLoading} isError={isError} isFetching={isFetching} setPage={setPage} />
      </div>
   )
}

export default Plans
