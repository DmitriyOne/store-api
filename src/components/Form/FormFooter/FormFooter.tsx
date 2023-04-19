import { Button, Stack } from '@chakra-ui/react'

import { AuthButtonGroup } from '../AuthButtonGroup'
import { FormDivider } from '../FormDivider'

export const FormFooter = () => {
	return (
		<Stack spacing="6">
			<Button variant="primary">Sign in</Button>

			<FormDivider />
			<AuthButtonGroup />
		</Stack>
	)
}
