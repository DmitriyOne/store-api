import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormControl, FormErrorMessage, FormLabel, Input as InputChakraUi, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IForm, IFormBtns, IValidation } from '@interfaces'

import { CustomInput } from '@components'

import { FormBtns } from '../FormBtns'

import { formStyles, spacingBigStyles, spacingSmallStyles } from './form-body.styles'

interface IProps extends IForm, IFormBtns { }

export const FormBody: FC<IProps> = ({ variant, btnText }) => {
	const { handleSubmit, formState: { errors }, reset, control } = useForm<IValidation>({ mode: 'onChange' })

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
				<CustomInput
					name="name"
					label="Name:"
					rules={VALIDATION.name}
					error={errors.name}
					control={control}
				/>
			</Stack>
			<FormBtns variant={variant} btnText={btnText} />
		</Stack>
	)
}
