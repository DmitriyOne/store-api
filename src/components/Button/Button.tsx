import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'

interface IProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: ReactNode
	className?: string
}

export const Button: FC<IProps> = ({
	className,
	children,
	...props
}) => {

	return (
		<button
			className={className}
			{...props}
		>
			{children}
		</button>
	)
}

