import { FC, ReactNode } from 'react'

import { chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'

interface IProps {
	label: string
	href: string
	children: ReactNode
}

export const SocialButton: FC<IProps> = ({ label, href, children }) => {

	return (
		<chakra.button
			as={'a'}
			href={href}
			
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>
				{label}
			</VisuallyHidden>
			{children}
		</chakra.button>
	)
}
