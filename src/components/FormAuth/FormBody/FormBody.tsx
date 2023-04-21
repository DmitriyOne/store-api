import { FC, useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { AlertStatus, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IForm, IFormBtns, IValidation } from '@interfaces'

import { Alert, CustomInput } from '@components'

import { FormBtns } from '../FormBtns'
import { FormForgotPass } from '../FormForgotPass'

import { formStyles, spacingBigStyles, spacingSmallStyles } from './form-body.styles'

interface IProps extends IForm, IFormBtns { }

export const FormBody: FC<IProps> = ({ variant, btnText }) => {
	const { handleSubmit, formState: { errors }, reset, control, getValues, setError } = useForm<IValidation>({ mode: 'onChange' })
	const alert = useContext(AlertContext)

	const handlerTimer = () => {
		const alertTimeout = setTimeout(() => {
			alert.visible = false
			alert.hide!()
			clearTimeout(alertTimeout)
		}, 300000)
	}

	const onSubmit: SubmitHandler<IValidation> = (data) => {
		console.log(data)
		const { password, confirm_password } = getValues()

		if (password !== confirm_password && variant === 'registration') {
			setError('confirm_password', { type: 'manual', message: 'Passwords do not match' })
			return
		}

		if (variant === 'login') {
			alert.visible = true
			alert.show('You have successfully logged into your account.', 'success')
		} else if (variant === 'registration') {
			alert.visible = true
			alert.show('The account has been created. You have successfully registered.', 'success')
		} else if (variant === 'forgot') {
			alert.visible = true
			alert.show('A one-time password has been sent to your email.', 'success')
		}

		handlerTimer()
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
					type="email"
					rules={VALIDATION.email}
					errors={errors.email}
					control={control}
				/>
				{variant !== 'forgot' &&
					<CustomInput
						name="password"
						label="Password"
						type="password"
						rules={VALIDATION.password}
						errors={errors.password}
						control={control}
					/>
				}
				{variant === 'registration' &&
					<CustomInput
						name="confirm_password"
						label="Confirm password"
						type="password"
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
