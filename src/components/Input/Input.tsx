import { InputHTMLAttributes } from 'react'
import { Control, FieldError, FieldValues, useController } from 'react-hook-form'

import { FormControl, FormLabel, Input } from '@chakra-ui/react'

import { IValidation } from '@interfaces'

interface InputProps {
	name: 'email' | 'password' | 'name' | 'confirm_password';
	label: string;
	rules?: Record<string, unknown>;
	error?: FieldError;
	type?: InputHTMLAttributes<HTMLInputElement>['type'];
	control: Control<IValidation, any>
}

export const CustomInput = <T extends FieldValues>({
	name,
	label,
	rules,
	error,
	type = 'text',
	control,
}: InputProps) => {
	const { field: { value, onChange, ref, ...inputProps } } = useController({ name, control, rules })

	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input
				ref={ref}
				id={name}
				type={type}
				value={value || ''}
				onChange={onChange}
				{...inputProps}
			/>
			{error && <div>{error.message}</div>}
		</FormControl>
	)
}
