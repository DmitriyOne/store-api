import { STORE_ROUTES } from '@constants'
import { IMenu } from '@interfaces'

export const menuItem: IMenu[] = [
	{
		title: 'Home',
		href: STORE_ROUTES.HOME,
	},
	{
		title: 'Shop',
		href: STORE_ROUTES.SHOP,
	},
	{
		title: 'About',
		href: STORE_ROUTES.ABOUT,
	},
	{
		title: 'Favorites',
		href: STORE_ROUTES.FAVORITES,
	},
]
