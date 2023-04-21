import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Stack, Input } from '@chakra-ui/react'

import { IForm, IValidation } from '@interfaces'

// import { Input } from '@components'

import { FormInput } from '../FormInput'

import { spacingBigStyles, spacingSmallStyles } from './form-body.styles'

export const FormBody: FC<IForm> = ({ variant }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IValidation>({ mode: 'onChange' })

	const styles = variant === 'login' ? { ...spacingBigStyles } : { ...spacingSmallStyles }

	return (
		<Stack {...styles}>
			{variant === 'forgot'
				? <Input  type="email" />
				: <>
					{variant === 'registration' && <Input type="text" />}
					<Input  type="email"
						{...register('email', {
							required: 'Емайл заполнить обязательно',
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Пожалуйста, введите корректный емайл',
							},
						})}
					/>
					<Input  type="password" />
					{variant === 'registration' && <Input type="password" />}
				</>
			}
		</Stack>

	)
}
