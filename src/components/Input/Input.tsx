import { InputHTMLAttributes, useContext } from 'react'
import { Control, FieldName, useController } from 'react-hook-form'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

import { IUser } from '@interfaces'

import { ConfirmContext } from '@context'

import { InputPassword } from './InputPassword'

interface IProps {
	name: FieldName<IUser>
	label: string
	rules?: Record<string, unknown>
	errors?: any
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	control: Control<IUser, any>
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
	const { errorConfirmMsg } = useContext(ConfirmContext)

	const isError = !!errors || !!errorConfirmMsg

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
				{isError && errors?.message || errorConfirmMsg}
			</FormErrorMessage>
		</FormControl>
	)
}
