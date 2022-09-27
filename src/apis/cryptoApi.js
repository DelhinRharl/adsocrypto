import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const baseUrl = 'https://adsocrypto.herokuapp.com/api'

export const cryptoApi = createApi({
  reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query:() => createRequest(`/watchlists`),
        })
    })
})
export const{useGetCryptosQuery}= cryptoApi;
