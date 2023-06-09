/* eslint-disable no-unused-vars */
import { FC } from 'react'

import { Stack, Text } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IFormBody } from '@interfaces'

import { CustomInput } from '@components'

import { FormBtns } from '../FormBtns'
import { FormForgotPass } from '../FormForgotPass'

import { formStyles, spacingBigStyles, spacingSmallStyles, textForgotStyles } from './form-body.styles'

export const FormBody: FC<IFormBody> = ({ variant, btnText, isLoading, onSubmit, handleSubmit, errors, control }) => {

	const wrapperStyles = variant === 'login' ? { ...spacingBigStyles } : { ...spacingSmallStyles }

	return (
		<Stack
			as="form"
			onSubmit={handleSubmit(onSubmit)}
			{...formStyles}
		>
			{variant === 'forgot' &&
				<Text {...textForgotStyles}>
					Write in the email field that you used to create your account on this site. If the email is correct, then within a couple of minutes a one-time password will be sent to your email to reset the password in the store account. Do not share this password with anyone.
				</Text>
			}

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
			<FormBtns
				variant={variant}
				isLoading={isLoading}
				btnText={btnText}
			/>
		</Stack>
	)
}
