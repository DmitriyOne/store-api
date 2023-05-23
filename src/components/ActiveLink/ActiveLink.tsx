import React, { Children, FC, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import styles from './active-link.module.scss'

type TProps = {
	activeClassName?: string;
	children: ReactElement;
} & LinkProps;

export const ActiveLink: FC<TProps> = ({
	children,
	activeClassName,
	...props
}) => {
	const { asPath, isReady } = useRouter()
	const child = Children.only(children)
	const childClassName = child.props.className
	const activeStyles = activeClassName?.trim() || styles.active
	
	const className = classNames(childClassName, {
		[activeStyles]: isReady && asPath === props.href || asPath === props.as,
	})

	return (
		<Link {...props}>
			{React.cloneElement(child, {
				className: className || null,
			})}
		</Link>
	)
}
