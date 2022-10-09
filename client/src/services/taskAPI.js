import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getCountTasksInProgress: builder.query({
      query: (token) => ({
        url: '/tasks/progress',
        headers: {
          'authorization': `Bearer ${token}`,
        }
      }),
    }),
    getTasks: builder.query({
      query: (token) => ({
        url: '/tasks',
        headers: {
          'authorization': `Bearer ${token}`,
        }
      }),
    }),
  }),
})

export const {
  useGetCountTasksInProgressQuery,
  useGetTasksQuery,
} = taskApi;
