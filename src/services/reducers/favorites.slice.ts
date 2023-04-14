import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFavoritesState, IShortProduct } from '@interfaces'

const initialState: IFavoritesState[] = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addItemFavorites: (state, action: PayloadAction<IShortProduct>) => {
			state.push(action.payload)
		},
		removeItemFavorites: (state, action: PayloadAction<IShortProduct>) => {
			return state.filter(item => item.id !== action.payload.id)
		},
	},
})

export const favoritesReducer = favoritesSlice.reducer
export const favoritesActions = favoritesSlice.actions
