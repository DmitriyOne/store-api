import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormControl, FormErrorMessage, FormLabel, Input as InputChakraUi, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IForm, IFormBtns, IValidation } from '@interfaces'

import { Input } from '@components'

import { FormBtns } from '../FormBtns'

import { formStyles, spacingBigStyles, spacingSmallStyles } from './form-body.styles'

interface IProps extends IForm, IFormBtns { }

export const FormBody: FC<IProps> = ({ variant, btnText }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IValidation>({ mode: 'onChange' })

	console.log(register)

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
				{/* <FormControl isInvalid={!!errors.name}>
					<FormLabel htmlFor="name">Name</FormLabel>
					<Input type="text"
						{...register('name', VALIDATION.name)}
					/>
					<FormErrorMessage>
						{errors.name && errors.name.message}
					</FormErrorMessage>
				</FormControl> */}
				{/* <Input
					label="Name"
					name="name"
					errors={errors}
				>
					<InputChakraUi
						type="text"
						{...register('name', VALIDATION.name)}
					/>
				</Input> */}

				<Input
					label="Name"
					// name="name"
					type="text"
					errors={errors}
					{...register('name', VALIDATION.name)}
				/>

			</Stack>

			<FormBtns variant={variant} btnText={btnText} />
		</Stack>
	)
}
