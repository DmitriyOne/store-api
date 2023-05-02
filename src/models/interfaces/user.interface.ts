export interface IUser {
	id: string
	name: string
	email: string
	password: string
	confirm_password?: string
	token: string
}

export interface IUserState {
	id: string
	name: string
	email: string
	token: string
}
