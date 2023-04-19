import { FC } from 'react'

import { Stack } from '@chakra-ui/react'

import { IForm } from '@interfaces'

import { FormInput } from '../FormInput'

import { spacingBigStyles, spacingSmallStyles } from './form-body.styles'

export const FormBody: FC<IForm> = ({ variant }) => {

	const styles = variant === 'login' ? { ...spacingBigStyles } : { ...spacingSmallStyles }
	return (
		<Stack {...styles}>
			{variant === 'forgot'
				? <FormInput label="Email" type="email" />
				: <>
					{variant === 'registration' && <FormInput label="Name" type="text" />}
					<FormInput label="Email" type="email" />
					<FormInput label="Password" type="password" />
					{variant === 'registration' && <FormInput label="Confirm password" type="password" />}
				</>
			}
		</Stack>

	)
}
