import { Box, Container, Stack, Text } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { SocialButton } from './SocialButton'
import { socialItem } from './socials'

import { containerStyles, stackStyles } from './footer.styles'

export const Footer = () => {
	const { footerBoxStyles } = useCustomStyles()

	return (
		<Box {...footerBoxStyles}>
			<Container
				as={Stack}
				{...containerStyles}
			>
				<Text>
					© 2023 Chakra Templates. All rights reserved
				</Text>

				<Stack
					{...stackStyles}
				>
					{socialItem.map(social =>
						<SocialButton
							key={social.label}
							label={social.label}
							href={social.href}
						>
							{social.icon}
						</SocialButton>
					)}
				</Stack>
			</Container>
		</Box>
	)
}
