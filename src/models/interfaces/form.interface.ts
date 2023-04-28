import { EForm } from '@enums'

export interface IForm {
	variant: keyof typeof EForm
}

export interface IFormHeader {
	title: string
	text: string
	linkText: string
	href: string
}

export interface IFormBtns {
	btnText: string
	isLoading?: boolean
}

