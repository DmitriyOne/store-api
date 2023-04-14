import { IShortProduct } from '@interfaces'

export interface ICartState {
	items: IShortProduct[];
	totalPrice: number;
}
