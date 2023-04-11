import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import { SocialButton } from './SocialButton'
import { socialItem } from './socials'

export const Footer = () => {

	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container
				as={Stack}
				
				maxW="container.xl"
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Text>
					© 2023 Chakra Templates. All rights reserved
				</Text>

				<Stack
					direction="row"
					spacing={6}
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
