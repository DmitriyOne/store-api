/* eslint-disable no-unused-vars */

export interface IPagination {
	productsPerPage: number
	totalProducts: number
	onPagination: (n: number) => void
}
