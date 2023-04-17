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
		onAddItemCart: (state, action: PayloadAction<IShortProduct>) => {
			state.items.push({
				...action.payload,
				quantity: 1,
			})
			state.totalPrice += action.payload.price
		},
		onRemoveItemCart: (state, action: PayloadAction<IShortProduct>) => {
			const removeItem = state.items.find(item => item.id === action.payload.id)
			if (removeItem) {
				state.items = state.items.filter(item => item.id !== action.payload.id)
				state.totalPrice -= removeItem.price * removeItem.quantity
			}
		},
		onIncrementQuantity: (state, action: PayloadAction<IShortProduct>) => {
			const item = state.items.find((item) => item.id === action.payload.id)
			if (item) {
				item.quantity += 1
			}
			state.totalPrice += action.payload.price
		},
		onDecrementQuantity: (state, action: PayloadAction<IShortProduct>) => {
			const item = state.items.find((item) => item.id === action.payload.id)
			if (item && item.quantity !== 1) {
				item.quantity -= 1
				state.totalPrice -= action.payload.price
			} else {
				alert('Can\'t do less than 1')
			}
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
