import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apidata = createApi({
  reducerPath: 'apidata',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  tagTypes: ['Services','Blog','Slider','Contact','Overview','Ourteam','Testimonials','Branding','Gallery','Kloding','Grafix','Advertising','Printing','Training','Administrative'],
  endpoints: (builder) => ({
    blog: builder.query({
      query: (args: any) => '/blog',
      providesTags: ['Blog']
    }),
    slider: builder.query({
      query: (args: any) => '/slider',
      providesTags: ['Slider']
    }),
    contact: builder.query({
      query: (args: any) => '/contact',
      providesTags: ['Contact']
    }),
    overview: builder.query({
      query: (args: any) => '/overview',
      providesTags: ['Overview']
    }),
    ourteam: builder.query({
      query: (args: any) => '/ourteam',
      providesTags: ['Ourteam']
    }),
    testimonials: builder.query({
      query: (args: any) => '/testimonials',
      providesTags: ['Testimonials']
    }),
    branding: builder.query({
      query: (args: any) => '/branding',
      providesTags: ['Branding']
    }),
    gallery: builder.query({
      query: (args: any) => '/gallery',
      providesTags: ['Gallery']
    }),
    klodin: builder.query({
      query: (args: any) => '/klodin',
      providesTags: ['Kloding']
    }),
    grafix: builder.query({
      query: (args: any) => '/grafix',
      providesTags: ['Grafix']
    }),
    advertising: builder.query({
      query: (args: any) => '/advertising',
      providesTags: ['Advertising']
    }),
    printing: builder.query({
      query: (args: any) => '/printing',
      providesTags: ['Printing']
    }),
    training: builder.query({
      query: (args: any) => '/training',
      providesTags: ['Training']
    }),
    administrative: builder.query({
      query: (args: any) => '/administrative',
      providesTags: ['Administrative']
    }),
    services: builder.query({
      query: (args: any) => '/services',
      providesTags: ['Services']
    }),
    sendemail: builder.mutation({
      query: (args: any) => ({
        url: '/sendemail',
        method: 'POST',
        body: args,
      }),
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
  useSendemailMutation,
} = apidata;
