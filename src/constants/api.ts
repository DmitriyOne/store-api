const API_BASE_ROUTE = process.env.NEXT_PUBLIC_API_URL

export const API = {
	PRODUCTS: {
		ALL: `${API_BASE_ROUTE}/products`,
		BY_ID: (id: string) => `${API_BASE_ROUTE}/products/${id}`,
	},
}
