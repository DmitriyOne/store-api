/* eslint-disable no-unused-vars */
import { Control, UseFormHandleSubmit } from 'react-hook-form'

import { EForm } from '@enums'
import { IUser } from '@interfaces'

export interface IFormBtns {
	btnText: string
	isLoading: boolean
	variant: keyof typeof EForm
}

export interface IForm
	extends IFormBtns {
	variant: keyof typeof EForm
	header: IFormHeader
	onSubmit: (data: IUser) => Promise<void>
	handleSubmit: UseFormHandleSubmit<IUser>
	errors: any
	control: Control<IUser, any>
}

export interface IFormHeader {
	title: string
	text: string
	linkText: string
	href: string
}

export interface IFormBody
	extends IFormBtns {
	variant: keyof typeof EForm
	onSubmit: (data: IUser) => Promise<void>
	handleSubmit: UseFormHandleSubmit<IUser>
	errors: any
	control: Control<IUser, any>
}
