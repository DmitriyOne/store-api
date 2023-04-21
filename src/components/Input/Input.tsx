import { InputHTMLAttributes } from 'react'
import { Control, FieldError, useController } from 'react-hook-form'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

import { IValidation } from '@interfaces'

import { InputPassword } from './InputPassword'

interface IProps {
	name: 'email' | 'password' | 'name' | 'confirm_password'
	label: string
	rules?: Record<string, unknown>
	errors?: FieldError
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	control: Control<IValidation, any>
}

export const CustomInput = ({
	name,
	label,
	rules,
	errors,
	type = 'text',
	control,
}: IProps) => {
	const { field: { value, onChange, ...inputProps } } = useController({ name, control, rules })

	const isError = !!errors

	return (
		<FormControl isInvalid={isError}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			{type === 'password'
				?
				<InputPassword
					id={name}
					value={value || ''}
					onChange={onChange}
					{...inputProps}
				/>
				:
				<Input
					id={name}
					type={type}
					value={value || ''}
					onChange={onChange}
					autoComplete={name}
					{...inputProps}
				/>
			}
			<FormErrorMessage>
				{isError && errors.message}
			</FormErrorMessage>
		</FormControl>
	)
}
