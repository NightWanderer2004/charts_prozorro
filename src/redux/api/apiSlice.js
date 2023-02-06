import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
   reducerPath: 'apiSlice',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://public.api.openprocurement.org/api/2.5/',
   }),
   endpoints: builder => ({
      getPlans: builder.query({
         query: () => '/plans',
      }),
      getPlansItem: builder.query({
         query: id => ({ url: `plans/${id}` }),
      }),
   }),
})

export const { useGetPlansQuery, useGetPlansItemQuery } = apiSlice
