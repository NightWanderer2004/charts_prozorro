import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
   reducerPath: 'apiSlice',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://public.api.openprocurement.org/api/2.5/',
      // baseUrl: 'https://www.boredapi.com/api/',
   }),
   endpoints: builder => ({
      plans: builder.query({
         // query: () => '/activity',
         query: () => '/plans',
      }),
   }),
})

export const { usePlansQuery } = apiSlice
