import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IForm, IFormBtns, IValidation } from '@interfaces'

import { CustomInput } from '@components'

import { FormBtns } from '../FormBtns'
import { FormForgotPass } from '../FormForgotPass'

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
				{variant === 'registration' &&
					<CustomInput
						name="name"
						label="Name"
						rules={VALIDATION.name}
						errors={errors.name}
						control={control}
					/>
				}
				<CustomInput
					name="email"
					label="Email"
					rules={VALIDATION.email}
					errors={errors.email}
					control={control}
				/>
				{variant !== 'forgot' &&
					<CustomInput
						name="password"
						label="Password"
						rules={VALIDATION.password}
						errors={errors.password}
						control={control}
					/>
				}
				{variant === 'registration' &&
					<CustomInput
						name="confirm_password"
						label="Confirm password"
						rules={VALIDATION.password}
						errors={errors.confirm_password}
						control={control}
					/>
				}
			</Stack>
			{variant === 'login' && <FormForgotPass />}
			<FormBtns variant={variant} btnText={btnText} />
		</Stack>
	)
}
