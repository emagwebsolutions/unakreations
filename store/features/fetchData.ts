import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apidata = createApi({
  reducerPath: 'apidata',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    blog: builder.query({
      query: (args: any) => '/blog',
    }),
    slider: builder.query({
      query: (args: any) => '/slider',
    }),
    contact: builder.query({
      query: (args: any) => '/contact',
    }),
    overview: builder.query({
      query: (args: any) => '/overview',
    }),
    ourteam: builder.query({
      query: (args: any) => '/ourteam',
    }),
    testimonials: builder.query({
      query: (args: any) => '/testimonials',
    }),
    branding: builder.query({
      query: (args: any) => '/branding',
    }),
    gallery: builder.query({
      query: (args: any) => '/gallery',
    }),
    klodin: builder.query({
      query: (args: any) => '/klodin',
    }),
    grafix: builder.query({
      query: (args: any) => '/grafix',
    }),
    advertising: builder.query({
      query: (args: any) => '/advertising',
    }),
    printing: builder.query({
      query: (args: any) => '/printing',
    }),
    training: builder.query({
      query: (args: any) => '/training',
    }),
    administrative: builder.query({
      query: (args: any) => '/administrative',
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
} = apidata;
