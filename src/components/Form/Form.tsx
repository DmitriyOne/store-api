import { Box, Container, Stack } from '@chakra-ui/react'

import { FormBody } from './FormBody'
import { FormFooter } from './FormFooter'
import { FormForgotPass } from './FormForgotPass'
import { FormHeader } from './FormHeader'

export const Form = () => {
	return (
		<Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
			<Stack spacing="8">
				<FormHeader />
				<Box
					py={{ base: '0', sm: '8' }}
					px={{ base: '4', sm: '10' }}
					bg={{ base: 'transparent', sm: 'bg-surface' }}
					boxShadow={{ base: 'none', sm: 'md' }}
					borderRadius={{ base: 'none', sm: 'xl' }}
				>
					<Stack spacing="6">
						<FormBody />

						<FormForgotPass />

						<FormFooter />
					</Stack>
				</Box>
			</Stack>
		</Container>
	)
}
