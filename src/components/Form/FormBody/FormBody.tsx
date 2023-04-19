import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

import { PasswordField } from '../PasswordField'

export const FormBody = () => {

	return (
		<Stack spacing="5">
			<FormControl>
				<FormLabel htmlFor="email">Email</FormLabel>
				<Input id="email" type="email" />
			</FormControl>
			<PasswordField />
		</Stack>

	)
}
