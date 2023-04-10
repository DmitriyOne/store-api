import { FC } from 'react'
import classNames from 'classnames'

import { ActiveLink } from '@components'

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
						<ActiveLink
							href={item.href}
							activeClassName={styles.active}
						>
							<span
								className={styles.link}
								onClick={navbarClose}
							>
								{item.title}

								<span className={styles.icon}>
									{item.icon}
								</span>
							</span>
						</ActiveLink>
					</li>
				)}
			</ul>
		</nav>
	)
}
