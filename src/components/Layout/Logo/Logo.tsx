import Link from 'next/link'

import { GeneratorSvg } from '@components'

import { STORE_ROUTES } from '@constants'

import styles from './logo.module.scss'

export const Logo = () => (

	<Link
		href={STORE_ROUTES.HOME}
		as={STORE_ROUTES.HOME}
		passHref
		className={styles.component}
	>
		<span className={styles.icon}>
			<GeneratorSvg id="logo" />
		</span>

		Store
	</Link>
)
