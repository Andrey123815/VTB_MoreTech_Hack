import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getTeamMembers: builder.query({
      query: (id) => ({
        url: '/team',
        params: {
          id
        }
      }),
    }),
  }),
})

export const {
  useLoginUserMutation,
} = userApi;
