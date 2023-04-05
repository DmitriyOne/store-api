import { GeneratorSvg } from '@components/GeneratorSvg'

import { STORE_ROUTES } from '@constants'

import { IMenu } from '@interfaces'

export const menuItems: IMenu[] = [
	{ title: 'Home', href: `${STORE_ROUTES.HOME}`, icon: <GeneratorSvg id="home" /> },
	{ title: 'Store', href: `${STORE_ROUTES.STORE}`, icon: <GeneratorSvg id="store" /> },
	{ title: 'About', href: `${STORE_ROUTES.ABOUT}`, icon: <GeneratorSvg id="about" /> },
	{ title: 'Sing up', href: `${STORE_ROUTES.SING_UP}`, icon: <GeneratorSvg id="singUP" /> },
	{ title: 'Cart', href: `${STORE_ROUTES.CART}`, icon: <GeneratorSvg id="cart" /> },
]
