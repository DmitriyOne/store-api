import { Container } from '@components'

import { Logo } from '../Logo'

import styles from './header.module.scss'

export const Header = () => {

	return (
		<header>
			<Container>
				<Logo />

			</Container>
		</header>
	)
}
