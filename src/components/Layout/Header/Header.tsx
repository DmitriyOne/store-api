import { Container } from '@/components/Container'

import { Logo } from '../Logo'

import styles from './header.module.scss'

export const Header = () => {

	return (
		<header>
			<Container size="l">
				<Logo />

			</Container>
		</header>
	)
}
