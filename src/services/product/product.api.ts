import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IProduct } from '@interfaces'

const baseUrl = 'https://fakestoreapi.com'

export const productApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	endpoints: (builder) => ({
		getAllProducts: builder.query<IProduct[], void>({
			query: () => '/products',
		}),
		getCurrentProduct: builder.query<IProduct, number>({
			query: (id) => `/products/${id}`,
		}),
	}),
})

export const { useGetAllProductsQuery, useGetCurrentProductQuery } = productApi
