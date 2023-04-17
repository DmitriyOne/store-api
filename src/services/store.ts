import { createWrapper } from 'next-redux-wrapper'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productApi } from './product'
import { cartReducer, favoritesReducer } from './reducers'

const rootReducer = combineReducers({
	[productApi.reducerPath]: productApi.reducer,
	cart: cartReducer,
	favorites: favoritesReducer,
})

export const makeStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: (gDM) => gDM().concat(productApi.middleware),
	})

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false })
