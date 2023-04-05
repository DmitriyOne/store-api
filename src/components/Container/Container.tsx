import { FC, ReactNode } from 'react'
import classNames from 'classnames'

interface IProps {
	variant?: 'row' | 'column'
	justify?: 'center' | 'space-between' | 'start' | 'end'
	align?: 'center' | 'stretch' | 'start' | 'end'
	children: ReactNode
}

export const Container: FC<IProps> = ({
	variant = 'row',
	justify = 'start',
	align = 'center',
	children,
}) => {

	const componentClass = classNames('container flex', {
		'flex-row': variant === 'row',
		'flex-col': variant === 'column',

		'justify-center': justify === 'center',
		'justify-between': justify === 'space-between',
		'justify-start': justify === 'start',
		'justify-end': justify === 'end',

		'items-center': align === 'center',
		'items-stretch': align === 'stretch',
		'items-start': align === 'start',
		'items-end': align === 'end',
	})

	return (
		<div className={componentClass}>
			{children}
		</div>
	)
}
