import { STORE_ROUTES } from '@constants'
import { IMenu } from '@interfaces'

export const menuItem: IMenu[] = [
	{
		title: 'Account',
		href: STORE_ROUTES.ACCOUNT,
	},
	{
		title: 'My orders',
		href: STORE_ROUTES.MY_ORDERS,
	},
	{
		title: 'Settings',
		href: STORE_ROUTES.SETTINGS,
	},
	{
		title: 'Logout',
		href: '#',
	},
]
