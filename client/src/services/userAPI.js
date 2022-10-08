import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
      loginUser: builder.mutation({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user
      }),
    }),
  }),
  })

export const {
  useLoginUserMutation,
} = userApi;
