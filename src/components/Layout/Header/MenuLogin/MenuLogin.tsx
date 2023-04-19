import NavLink from 'next/link'
import { BiLogIn } from 'react-icons/bi'

import { Icon, Link } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { componentStyles, iconStyles } from './menu-login.styles'

export const MenuLogin = () => {
	return (
		<Link
			as={NavLink}
			href={STORE_ROUTES.LOGIN}
			{...componentStyles}
		>
			<Icon
				as={BiLogIn}
				{...iconStyles}
			/>
		</Link>
	)
}
