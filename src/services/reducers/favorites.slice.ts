import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFavoritesState, IShortProduct } from '@interfaces'

const initialState: IFavoritesState[] = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		onToggleItemFavorites: (state, action: PayloadAction<IShortProduct>) => {
			const existingIndex = state.findIndex(item => item.id === action.payload.id)
			if (existingIndex !== -1) {
				state.splice(existingIndex, 1)
			} else {
				state.push(action.payload)
			}
		},
		onRemoveItemFavorites: (state, action: PayloadAction<IShortProduct>) => {
			return state.filter(item => item.id !== action.payload.id)
		},
	},
})

export const favoritesReducer = favoritesSlice.reducer
export const favoritesActions = favoritesSlice.actions
