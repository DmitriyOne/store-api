import { Button, Stack } from '@chakra-ui/react'

import { AuthButtonGroup } from '../AuthButtonGroup'
import { FormDivider } from '../FormDivider'

import { btnStyles, componentStyles } from './form-footer.styles'

export const FormFooter = () => {
	return (
		<Stack {...componentStyles}>
			<Button {...btnStyles}>Sign in</Button>
			<FormDivider />
			<AuthButtonGroup />
		</Stack>
	)
}
