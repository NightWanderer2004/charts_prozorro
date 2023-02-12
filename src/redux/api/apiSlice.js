import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
   reducerPath: 'apiSlice',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://public.api.openprocurement.org/api/2.5/',
   }),
   endpoints: builder => ({
      getItem: builder.query({
         query: args => {
            const { id, type } = args
            return { url: `${type}/${id}` }
         },
      }),
      getPage: builder.query({
         query: args => {
            const { page, type, limit } = args
            return { url: `${type}${limit}${page}` }
         },
      }),
   }),
})

export const { useGetItemQuery, useGetPageQuery } = apiSlice
