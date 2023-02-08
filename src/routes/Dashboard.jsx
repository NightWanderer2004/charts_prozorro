import { useState } from 'react'
import Line from '../components/UI/Line'
import DataTable from '../components/UI/table/DataTable'
import Title from '../components/UI/Title'
import { useGetPlansPageQuery } from '../redux/api/apiSlice'

const Dashboard = () => {
   const [page, setPage] = useState(null)
   const { data, isLoading, isError } = useGetPlansPageQuery(page)

   return (
      <div>
         <Title>Dashboard</Title>
         <Line />
         <DataTable data={data} isLoading={isLoading} isError={isError} setPage={setPage} />
      </div>
   )
}

export default Dashboard
