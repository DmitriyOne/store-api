import { FC, InputHTMLAttributes } from 'react'
import { Control, FieldError, useController } from 'react-hook-form'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

import { IValidation } from '@interfaces'

interface IProps {
	name: 'email' | 'password' | 'name' | 'confirm_password'
	label: string
	rules?: Record<string, unknown>
	errors?: FieldError
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	control: Control<IValidation, any>
}

export const CustomInput:FC<IProps> = ({
	name,
	label,
	rules,
	errors,
	type = 'text',
	control,
}) => {
	const { field: { value, onChange, ref, ...inputProps } } = useController({ name, control, rules })

	const isError = !!errors

	return (
		<FormControl isInvalid={isError}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input
				ref={ref}
				id={name}
				type={type}
				value={value || ''}
				onChange={onChange}
				{...inputProps}
			/>
			<FormErrorMessage>
				{isError && errors.message}
			</FormErrorMessage>
		</FormControl>
	)
}
