import { CartDropdown, Container } from '@components'

import { useOpen, useWindowSize } from '@hooks'

import { Logo } from '../Logo'

import { Burger } from './Burger/Burger'
import { Navbar } from './Navbar/Navbar'

import styles from './header.module.scss'

export const Header = () => {
	const { isMobile } = useWindowSize()
	const { isOpen, onClose, onToggle } = useOpen()

	return (
		<header className={styles.component}>
			<Container justify="space-between">
				<Logo />

				<Navbar navbarIsOpen={isOpen} navbarClose={onClose} />
				{isMobile &&
					<Burger
						burgerIsOpen={isOpen}
						burgerToggle={onToggle}
					/>
				}

				<CartDropdown />
			</Container>
		</header>
	)
}
