import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getTeamMembers: builder.query({
      query: (token) => ({
        url: '/users/team',
        headers: {
          'authorization': `Bearer ${token}`,
        }
      }),
    }),
  }),
})

export const {
  useGetTeamMembersQuery,
} = teamApi;
