import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi= createApi({
    reducerPath: "postApi" ,
    baseQuery: fetchBaseQuery({ baseUrl:"https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        // make query
        getAllPost:builder.query({
            query:()=>`users`
        }),
        getPostById:builder.query({
            query:(id)=>`users/${id}`
        })
    })
});

export const {useGetAllPostQuery,useGetPostByIdQuery} = postApi;