import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
   reducerPath: 'apiSlice',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://public.api.openprocurement.org/api/2.5/',
   }),
   endpoints: builder => ({
      getCategory: builder.query({
         query: type => `${type === 'plans' ? 'plans' : 'tenders'}`,
      }),
      getItem: builder.query({
         query: args => {
            const { id, type } = args
            if (type == 'plans') {
               return { url: `plans/${id}` }
            } else if (type == 'tenders') {
               return { url: `tenders/${id}` }
            }
         },
      }),
      getPage: builder.query({
         query: args => {
            const { page, type } = args
            if (type == 'plans') {
               return { url: `plans?${page}` }
            } else if (type == 'tenders') {
               return { url: `tenders?${page}` }
            }
         },
      }),
   }),
})

export const { useGetCategoryQuery, useGetItemQuery, useGetPageQuery } = apiSlice
