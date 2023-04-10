import Link from 'next/link'
import { BsShop } from 'react-icons/bs'

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
			<BsShop />
		</span>

		Store
	</Link>
)
