import { FC } from 'react'
import NextLink from 'next/link'

import { Link, useColorModeValue } from '@chakra-ui/react'

import { IMenu } from '@interfaces'

import styles from './nav-link.module.scss'

interface IProps {
	menu: IMenu
	onClick?: () => void
}

export const NavLink: FC<IProps> = ({ menu, onClick }) => {

	return (
		<li
			className={styles.component}
		>
			<Link
				as={NextLink}
				href={menu.href}
				px={2}
				py={1}
				rounded="md"
				_hover={{
					textDecoration: 'none',
					bg: useColorModeValue('gray.200', 'gray.700'),
				}}
				onClick={onClick}
			>
				{menu.title}
			</Link>
		</li>
	)
}