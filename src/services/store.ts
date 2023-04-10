import { configureStore } from '@reduxjs/toolkit'

import { productApi } from './product'
import { cartReducer } from './reducers'

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		cart: cartReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
