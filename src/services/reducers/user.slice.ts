import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUserState } from '@interfaces'

const initialState: IUserState = {
	id: null,
	name: null,
	email: null,
	isEmailVerified: false,
	avatar: null,
	phone: null,
	isPhoneVerified: false,
	createAccount: null,
	lastLogin: null,
	token: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUserState>) => {
			Object.assign(state, action.payload)
		},
		updateUser: (state, action: PayloadAction<Partial<IUserState>>) => {
			Object.assign(state, action.payload)
		},
		removeUser: (state) => {
			Object.assign(state, initialState)
		},
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
