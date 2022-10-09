import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getCountTasksInProgress: builder.query({
      query: () => ({
        url: '/task/progress',
      }),
    }),
    getTasks: builder.query({
      query: () => ({
        url: '/tasks',
      }),
    }),
  }),
})

export const {
  useGetCountTasksInProgressQuery,
  useGetTasksQuery,
} = taskApi;
