import { STORE_ROUTES } from '@constants'
import { IMenu } from '@interfaces'

export const menuItem: IMenu[] = [
	{
		title: 'Account',
		href: STORE_ROUTES.HOME,
	},
	{
		title: 'My orders',
		href: STORE_ROUTES.SHOP,
	},
	{
		title: 'Settings',
		href: STORE_ROUTES.ABOUT,
	},
]
