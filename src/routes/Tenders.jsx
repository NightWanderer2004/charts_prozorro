import { useState } from 'react'
import Line from '../components/UI/Line'
import Title from '../components/UI/Title'
import DataTable from '../components/UI/table/DataTable'
import { useGetPageQuery } from '../redux/api/apiSlice'

const Tenders = () => {
   const [page, setPage] = useState('')
   const limit = 15
   const { data, isLoading, isError, isFetching } = useGetPageQuery({ page, type: 'tenders', limit: `?limit=${limit}` })

   return (
      <div>
         <Title>Тендери</Title>
         <Line />
         <DataTable type='tenders' data={data} isLoading={isLoading} isError={isError} isFetching={isFetching} setPage={setPage} />
      </div>
   )
}

export default Tenders
