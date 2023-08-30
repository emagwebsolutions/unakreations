import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apidata = createApi({
  reducerPath: 'apidata',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  tagTypes: ['posts'],
  endpoints: (builder) => ({
    blog: builder.query({
      query: (args: any) => '/blog',
      providesTags: ['posts']
    }),
    slider: builder.query({
      query: (args: any) => '/slider',
      providesTags: ['posts']
    }),
    contact: builder.query({
      query: (args: any) => '/contact',
      providesTags: ['posts']
    }),
    overview: builder.query({
      query: (args: any) => '/overview',
      providesTags: ['posts']
    }),
    ourteam: builder.query({
      query: (args: any) => '/ourteam',
      providesTags: ['posts']
    }),
    testimonials: builder.query({
      query: (args: any) => '/testimonials',
      providesTags: ['posts']
    }),
    branding: builder.query({
      query: (args: any) => '/branding',
      providesTags: ['posts']
    }),
    gallery: builder.query({
      query: (args: any) => '/gallery',
      providesTags: ['posts']
    }),
    klodin: builder.query({
      query: (args: any) => '/klodin',
      providesTags: ['posts']
    }),
    grafix: builder.query({
      query: (args: any) => '/grafix',
      providesTags: ['posts']
    }),
    advertising: builder.query({
      query: (args: any) => '/advertising',
      providesTags: ['posts']
    }),
    printing: builder.query({
      query: (args: any) => '/printing',
      providesTags: ['posts']
    }),
    training: builder.query({
      query: (args: any) => '/training',
      providesTags: ['posts']
    }),
    administrative: builder.query({
      query: (args: any) => '/administrative',
      providesTags: ['posts']
    }),
    services: builder.query({
      query: (args: any) => '/services',
      providesTags: ['posts']
    }),
    sendemail: builder.mutation({
      query: (args: any) => ({
        url: '/sendemail',
        method: 'POST',
        body: args,
      }),
      invalidatesTags: ['posts']
    }),
  }),
});

export const {
  useBlogQuery,
  useSliderQuery,
  useContactQuery,
  useOverviewQuery,
  useOurteamQuery,
  useTestimonialsQuery,
  useBrandingQuery,
  useGalleryQuery,
  useKlodinQuery,
  useGrafixQuery,
  useAdvertisingQuery,
  usePrintingQuery,
  useTrainingQuery,
  useAdministrativeQuery,
  useServicesQuery,
  useSendemailMutation
} = apidata;
