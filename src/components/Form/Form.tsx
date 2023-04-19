import { Box, Container, Stack } from '@chakra-ui/react'

import { FormBody } from './FormBody'
import { FormFooter } from './FormFooter'
import { FormForgotPass } from './FormForgotPass'
import { FormHeader } from './FormHeader'

import { componentStyles, formStyles, formWrapStyles, wrapperStyles } from './form.styles'

export const Form = () => {
	return (
		<Container {...componentStyles}>
			<Stack {...wrapperStyles}>
				<FormHeader />
				<Box {...formStyles}>
					<Stack {...formWrapStyles}>
						<FormBody />
						<FormForgotPass />
						<FormFooter />
					</Stack>
				</Box>
			</Stack>
		</Container>
	)
}
