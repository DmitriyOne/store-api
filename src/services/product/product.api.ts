import { HYDRATE } from 'next-redux-wrapper'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IProduct } from '@interfaces'

const baseUrl = 'https://fakestoreapi.com'

export const productApi = createApi({
	reducerPath: 'product/api',
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	endpoints: (builder) => ({
		getAllProducts: builder.query<IProduct[], void>({
			query: () => '/products',
		}),
		getCurrentProduct: builder.query<IProduct, number>({
			query: (id) => `/products/${id}`,
		}),
	}),
})

export const {
	useGetAllProductsQuery,
	useGetCurrentProductQuery,
	util: { getRunningQueriesThunk: getRQTProduct } } = productApi

export const { getAllProducts, getCurrentProduct } = productApi.endpoints
