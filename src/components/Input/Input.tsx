import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes, ReactNode, useRef } from 'react'
import { FieldErrors } from 'react-hook-form'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { FormControl, FormErrorMessage, FormLabel, IconButton, Input as InputChakraUi, InputGroup, InputProps, InputRightElement, useDisclosure, useMergeRefs } from '@chakra-ui/react'

import { inputStyles, labelStyles } from './input.styles'

interface IProps extends InputProps {
	name: string
	label: string
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	errors?: FieldErrors
	children?: ReactNode
}

export const Input = forwardRef(({
	name,
	label,
	type,
	errors,
	children,
	...props
}: IProps, ref: ForwardedRef<HTMLInputElement>
) => {
	const isError = name ? errors?.hasOwnProperty(name) : false
	const errorMessage = name ? errors?.[name]?.message : ''

	console.log(errors)
	console.log(isError)

	return (
		<FormControl isInvalid={isError}>
			<FormLabel
				htmlFor={name}
				{...labelStyles}
			>
				{label}
			</FormLabel>
			<InputChakraUi
				id={name}
				type={type}
				name={name}
				{...props}
				// {...inputStyles}
			/>
			{children}
			<FormErrorMessage>
				{isError && <div>{errorMessage}</div>}
			</FormErrorMessage>
		</FormControl>
	)
}
)

Input.displayName = 'Input'
