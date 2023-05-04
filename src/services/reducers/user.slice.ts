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
			state.id = action.payload.id
			state.name = action.payload.name
			state.email = action.payload.email
			state.isEmailVerified = action.payload.isEmailVerified
			state.avatar = action.payload.avatar
			state.phone = action.payload.phone
			state.isPhoneVerified = action.payload.isPhoneVerified
			state.createAccount = action.payload.createAccount
			state.lastLogin = action.payload.lastLogin
			state.token = action.payload.token
		},
		updateUser: (state, action: PayloadAction<Partial<IUserState>>) => {
			Object.assign(state, action.payload)
		},
		removeUser: (state) => {
			state.id = null
			state.name = null
			state.email = null
			state.isEmailVerified = null
			state.avatar = null
			state.phone = null
			state.isPhoneVerified = null
			state.createAccount = null
			state.lastLogin = null
			state.token = null
		},
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
