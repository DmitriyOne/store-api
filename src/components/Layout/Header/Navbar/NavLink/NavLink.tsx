import { FC } from 'react'
import NextLink from 'next/link'

import { Link } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { IMenu } from '@interfaces'

import { linkStyles } from './nav-link-styles'

import styles from './nav-link.module.scss'

interface IProps {
	menu: IMenu
	onClick?: () => void
}

export const NavLink: FC<IProps> = ({ menu, onClick }) => {
	const { navLinkButtonStyles } = useCustomStyles()

	return (
		<li
			className={styles.component}
		>
			<Link
				as={NextLink}
				href={menu.href}
				onClick={onClick}
				{...linkStyles}
				{...navLinkButtonStyles}
			>
				{menu.title}
			</Link>
		</li>
	)
}
