import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICartState, IShortProduct } from '@interfaces'

const initialState: ICartState = {
	items: [],
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemCart: (state, action: PayloadAction<IShortProduct>) => {
			state.items.push(action.payload)
			state.totalPrice += action.payload.price
		},
		removeItemCart: (state, action: PayloadAction<IShortProduct>) => {
			const removeItem = state.items.find(item => item.id === action.payload.id)
			if (removeItem) {
				state.items = state.items.filter(item => item.id !== action.payload.id)
				state.totalPrice -= removeItem.price
			}
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
