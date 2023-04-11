import React, { FC } from 'react'
import NextLink from 'next/link'

import { Link, useColorModeValue } from '@chakra-ui/react'

import { IMenu } from '@interfaces'

interface IProps {
	menu: IMenu
}

export const NavLink: FC<IProps> = ({ menu }) => {

	return (
		<li>
			<Link
				px={2}
				py={1}
				rounded={'md'}
				_hover={{
					textDecoration: 'none',
					bg: useColorModeValue('gray.200', 'gray.700'),
				}}
				as={NextLink}
				href={menu.href}
			>
				{menu.title}
			</Link>
		</li>
	)
}
