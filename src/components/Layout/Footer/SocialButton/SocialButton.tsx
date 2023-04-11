import { FC, ReactNode } from 'react'

import { chakra, VisuallyHidden } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { buttonStyles } from './social-button.styles'

interface IProps {
	label: string
	href: string
	children: ReactNode
}

export const SocialButton: FC<IProps> = ({ label, href, children }) => {
	const { socialButtonBg } = useCustomStyles()

	return (
		<chakra.button
			as="a"
			href={href}
			{...socialButtonBg}
			{...buttonStyles}
		>
			<VisuallyHidden>
				{label}
			</VisuallyHidden>
			{children}
		</chakra.button>
	)
}
