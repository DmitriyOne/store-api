import { configureStore } from '@reduxjs/toolkit'

import { productApi } from './product'

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
