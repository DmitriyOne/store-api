import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productApi } from './product'
import { cartReducer, favoritesReducer } from './reducers'

const rootReducer = combineReducers({
	[productApi.reducerPath]: productApi.reducer,
	cart: cartReducer,
	favorites: favoritesReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
