import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IProduct } from '@interfaces'

const baseUrl = 'https://fakestoreapi.com'

export const productApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	endpoints: (builder) => ({
		getAllProducts: builder.query<IProduct[], undefined>({
			query: () => '/products',
		}),
	}),
})

export const { useGetAllProductsQuery } = productApi
