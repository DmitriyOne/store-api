import { FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './container.module.scss'

enum ESize {
	l = 'l',
	m = 'm',
	s = 's',
}

interface IProps {
	size: keyof typeof ESize
	children: ReactNode
}

export const Container: FC<IProps> = ({ size, children }) => {

	const componentClass = classNames(styles.component, {
		[styles.large]: size === 'l',
		[styles.medium]: size === 'm',
		[styles.small]: size === 's',
	})
	return (
		<div className={componentClass}>
			{children}
		</div>
	)
}
