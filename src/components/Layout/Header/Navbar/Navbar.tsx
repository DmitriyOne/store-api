import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { menuItems } from './menu'

import styles from './navbar.module.scss'

interface IProps {
	navbarIsOpen: boolean
	navbarClose: () => void
}

export const Navbar: FC<IProps> = ({ navbarIsOpen, navbarClose }) => {

	const componentClass = classNames(styles.component, {
		[styles.active]: navbarIsOpen,
	})

	return (
		<nav className={componentClass}>
			<ul className={styles.menu}>
				{menuItems.map((item, idx) =>
					<li
						key={idx}
						className={styles.item}
					>
						<Link
							href={item.href}
							className={styles.link}
							onClick={navbarClose}
						>
							{item.title}

							<span className={styles.icon}>
								{item.icon}
							</span>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}
