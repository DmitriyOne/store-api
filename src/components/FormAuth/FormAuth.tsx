import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Box, Container, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IForm, IValidation } from '@interfaces'

import { FormBody } from './FormBody'
import { FormFooter } from './FormFooter'
import { FormForgotPass } from './FormForgotPass'
import { FormHeader } from './FormHeader'

import { componentStyles, formStyles, formWrapStyles, wrapperStyles } from './form.styles'

export const FormAuth: FC<IForm> = ({ variant }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IValidation>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IValidation> = (data) => {
		console.log(data)
		reset()
	}

	return (
		<Container {...componentStyles}>
			<Stack {...wrapperStyles}>
				<FormHeader variant={variant} />
				<Box
					as="form"
					onSubmit={handleSubmit(onSubmit)}
					{...formStyles}
				>
					<Stack {...formWrapStyles}>

						<Stack >
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

						{/* <FormBody variant={variant} /> */}
						{/* {variant === 'login' && <FormForgotPass />} */}
						{/* <button type="submit">submit</button> */}
						<FormFooter variant={variant} />
					</Stack>
				</Box>
			</Stack>
		</Container>
	)
}
