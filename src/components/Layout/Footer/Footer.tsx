import { Container } from '@components'

import { STORE_LINKS } from '@constants/links'

import styles from './footer.module.scss'

export const Footer = () => {

	return (
		<footer className={styles.component}>
			<Container justify="space-between">
				<div className={styles.text}>
					Copyright © 2023
				</div>

				<a
					className={styles.text}
					href={STORE_LINKS.instagram}
					target="_blank"
				>
					Frontend: Dima F.
				</a>
			</Container>
		</footer>
	)
}
