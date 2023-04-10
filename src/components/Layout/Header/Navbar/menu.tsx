import { AiOutlineComment, AiOutlineHome, AiOutlineLogin, AiOutlineShop } from 'react-icons/ai'

import { STORE_ROUTES } from '@constants'

import { IMenu } from '@interfaces'

export const menuItems: IMenu[] = [
	{ title: 'Home', href: `${STORE_ROUTES.HOME}`, icon: <AiOutlineHome /> },
	{ title: 'Store', href: `${STORE_ROUTES.STORE}`, icon: <AiOutlineShop /> },
	{ title: 'About', href: `${STORE_ROUTES.ABOUT}`, icon: <AiOutlineComment /> },
	{ title: 'Sing up', href: `${STORE_ROUTES.SING_UP}`, icon: <AiOutlineLogin /> },
]
