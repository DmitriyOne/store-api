import { FC, ReactNode } from 'react'

import { chakra, VisuallyHidden } from '@chakra-ui/react'

import { useSocialsBgHover } from './social-button.hover'
import { buttonStyles } from './social-button.styles'

interface IProps {
	label: string
	href: string
	children: ReactNode
}

export const SocialButton: FC<IProps> = ({ label, href, children }) => {
	const bg = useSocialsBgHover()

	return (
		<chakra.button
			as="a"
			href={href}
			{...bg}
			{...buttonStyles}
		>
			<VisuallyHidden>
				{label}
			</VisuallyHidden>
			{children}
		</chakra.button>
	)
}
