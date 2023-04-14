import { configureStore } from '@reduxjs/toolkit'

import { productApi } from './product'
import { cartReducer, favoritesReducer } from './reducers'

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		cart: cartReducer,
		favorites: favoritesReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
