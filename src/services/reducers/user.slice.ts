import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUser, IUserState } from '@interfaces'

const initialState: IUserState = {
	name: null,
	id: null,
	email: null,
	token: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUserState>) => {
			state.name = action.payload.name
			state.email = action.payload.email
			state.token = action.payload.token
			state.id = action.payload.id
		},
		removeUser: (state) => {
			state.name = null
			state.email = null
			state.token = null
			state.id = null
		},
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
