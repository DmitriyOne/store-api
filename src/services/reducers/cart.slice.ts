import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICart, ICartState } from '@interfaces'

const initialState: ICartState = {
	items: [],
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ICart>) => {
			state.items.push(action.payload)
			state.totalPrice += action.payload.price
		},
		removeItem: (state, action: PayloadAction<ICart>) => {
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
