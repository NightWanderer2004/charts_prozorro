import { useState } from 'react'
import Line from '../components/UI/Line'
import Title from '../components/UI/Title'
import DataTable from '../components/UI/table/DataTable'
import { useGetPageQuery } from '../redux/api/apiSlice'

const Tenders = () => {
   const [page, setPage] = useState('')
   const { data, isLoading, isError } = useGetPageQuery({ page, type: 'tenders' })

   return (
      <div>
         <Title>Tenders</Title>
         <Line />
         <DataTable type='tenders' data={data} isLoading={isLoading} isError={isError} setPage={setPage} />
      </div>
   )
}

export default Tenders
