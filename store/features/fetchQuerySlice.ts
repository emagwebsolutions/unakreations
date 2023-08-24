import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchData = createApi({
  reducerPath: 'fetchData',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    getposts: builder.query({
      query: (args: any) => '/fetchpost',
    }),
    getslides: builder.query({
      query: (args: any) => '/fetchslides',
    }),
    getcontact: builder.query({
      query: (args: any) => '/fetchcontact',
    }),
  }),
});

export const { useGetpostsQuery, useGetslidesQuery, useGetcontactQuery } = fetchData;
