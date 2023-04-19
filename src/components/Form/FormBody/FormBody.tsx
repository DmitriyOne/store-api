import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

import { PasswordField } from '../PasswordField'

import { inputStyles, labelStyles } from './form-body.styles'

export const FormBody = () => {

	return (
		<Stack spacing="5">
			<FormControl>
				<FormLabel
					htmlFor="email"
					{...labelStyles}
				>
					Email
				</FormLabel>
				<Input
					id="email"
					type="email"
					{...inputStyles}
				/>
			</FormControl>
			<PasswordField />
		</Stack>

	)
}
