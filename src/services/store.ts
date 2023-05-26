import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { cartReducer, favoritesReducer, userReducer } from './reducers'

const rootReducer = combineReducers({
	cart: cartReducer,
	favorites: favoritesReducer,
	user: userReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (gDM) => gDM().concat(),
})

// export type AppStore = ReturnType<typeof store.getState>;
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof store.getState>
