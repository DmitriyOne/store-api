export interface ICart {
	id: number
	title: string
	category: string
	price: number
	image: string
}

export interface ICartState {
	items: ICart[];
	totalPrice: number;
}
