import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IForm, IFormBtns, IValidation } from '@interfaces'

import { FormBtns } from '../FormBtns'

import { formStyles, spacingBigStyles, spacingSmallStyles } from './form-body.styles'

interface IProps extends IForm, IFormBtns { }

export const FormBody: FC<IProps> = ({ variant, btnText }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IValidation>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IValidation> = (data) => {
		console.log(data)
		reset()
	}

	const wrapperStyles = variant === 'login' ? { ...spacingBigStyles } : { ...spacingSmallStyles }
	return (
		<Stack
			as="form"
			onSubmit={handleSubmit(onSubmit)}
			{...formStyles}
		>

			<Stack {...wrapperStyles}>

				{/* Input */}
				<FormControl isInvalid={!!errors.name}>
					<FormLabel htmlFor="name">Name</FormLabel>
					<Input type="text"
						{...register('name', VALIDATION.name)}
					/>
					<FormErrorMessage>
						{errors.name && errors.name.message}
					</FormErrorMessage>
				</FormControl>

			</Stack>

			<FormBtns variant={variant} btnText={btnText} />
		</Stack>
	)
}
