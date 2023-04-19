import { FC } from 'react'

import { Box, Container, Stack } from '@chakra-ui/react'

import { IForm } from '@interfaces'

import { FormBody } from './FormBody'
import { FormFooter } from './FormFooter'
import { FormForgotPass } from './FormForgotPass'
import { FormHeader } from './FormHeader'

import { componentStyles, formStyles, formWrapStyles, wrapperStyles } from './form.styles'

export const Form: FC<IForm> = ({ variant }) => {

	return (
		<Container {...componentStyles}>
			<Stack {...wrapperStyles}>
				<FormHeader variant={variant} />
				<Box {...formStyles}>
					<Stack {...formWrapStyles}>
						<FormBody variant={variant} />
						{variant === 'login' && <FormForgotPass />}
						<FormFooter variant={variant} />
					</Stack>
				</Box>
			</Stack>
		</Container>
	)
}
