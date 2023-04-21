import { FC, useEffect, useState } from 'react'

import { Button, Stack } from '@chakra-ui/react'

import { IForm } from '@interfaces'

import { AuthButtonGroup } from '../AuthButtonGroup'
import { FormDivider } from '../FormDivider'

import { btnStyles, componentStyles } from './form-footer.styles'

export const FormFooter: FC<IForm> = ({ variant }) => {
	const [btnText, setBtnText] = useState('')

	const btnTextLogin = 'Log in'
	const btnTextReg = 'Register'
	const btnTextForgot = 'Send'

	useEffect(() => {
		if (variant === 'login') {
			setBtnText(btnTextLogin)
		} else if (variant === 'registration') {
			setBtnText(btnTextReg)
		} else if (variant === 'forgot') {
			setBtnText(btnTextForgot)
		}
	}, [variant])

	return (
		<Stack {...componentStyles}>
			<Button type="submit" {...btnStyles}>
				{btnText}
			</Button>
			{variant !== 'forgot' && <>
				<FormDivider />
				<AuthButtonGroup />
			</>
			}
		</Stack>
	)
}
