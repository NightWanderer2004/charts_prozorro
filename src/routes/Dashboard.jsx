import { useState } from 'react'
import Line from '../components/UI/Line'
import DataTable from '../components/UI/table/DataTable'
import Title from '../components/UI/Title'
import { useGetPageQuery } from '../redux/api/apiSlice'

const Dashboard = () => {
   const [page, setPage] = useState('')
   const { data, isLoading, isError } = useGetPageQuery({ page, type: 'plans' })

   return (
      <div>
         <Title>Dashboard</Title>
         <Line />
         <DataTable type='plans' data={data} isLoading={isLoading} isError={isError} setPage={setPage} />
      </div>
   )
}

export default Dashboard
