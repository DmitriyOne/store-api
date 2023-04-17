export interface IProductRating {
	rate: number
	count: number
}

export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: IProductRating
}

export interface IShortProduct {
	id: number
	title: string
	category: string
	price: number
	image: string
	quantity: number
}
