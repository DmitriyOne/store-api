import React, { Children, FunctionComponent, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

type TProps = {
	activeClassName?: string;
	children: ReactElement;
	href: string;
} & LinkProps;

export const ActiveLink: FunctionComponent<TProps> = ({
	children,
	activeClassName,
	...props
}) => {
	const { pathname } = useRouter()
	const child = Children.only(children)
	const childClassName = child.props.className
	const activeStyles = activeClassName?.trim() || 'active'
	const componentClass = classNames(childClassName, {
		[activeStyles]:
			pathname === props.href ||
			pathname === props.as ||
			pathname.replace(/\//g, '') === props.href.replace(/\//g, ''),
	})

	return (
		<Link {...props}>
			{React.cloneElement(child, {
				className: componentClass || null,
			})}
		</Link>
	)
}
