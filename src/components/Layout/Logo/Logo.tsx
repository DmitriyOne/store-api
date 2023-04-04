import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './logo.module.scss'

interface IProps {
	className?: string
}

export const Logo: FC<IProps> = ({
	className,
}) => {

	return (
		<div
			className={classNames(styles.component, className)}
		>
			<Link
				href={'/'}
				passHref
				as={'/'}
			>
				Logo
			</Link>
		</div>
	)
}
