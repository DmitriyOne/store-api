import { FC, useEffect, useState } from 'react'
import NavLink from 'next/link'

import { Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'
import { IForm } from '@interfaces'

import { componentStyles, containerStyles, linkStyles, textStyles, titleStyles, wrapperStyles } from './form-header.styles'

export const FormHeader: FC<IForm> = ({ variant }) => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [linkText, setLinkText] = useState('Register')
	const [href, setHref] = useState('')

	const titleLogin = 'Log in to your account'
	const titleReg = 'Register your account'
	const titleForgot = 'Recover your password'

	const textLogin = 'You have an account?'
	const textReg = 'Don\'t have an account?'
	const textForgot = 'Don\'t have an account?'

	const linkTextLogin = 'Log in'
	const linkTextReg = 'Register'

	const linkHrefLogin = STORE_ROUTES.LOGIN
	const linkHrefReg = STORE_ROUTES.REGISTRATION

	useEffect(() => {
		if (variant === 'login') {
			setTitle(titleLogin)
			setLinkText(linkTextReg)
			setHref(linkHrefReg)
			setText(textReg)
		} else if (variant === 'registration') {
			setTitle(titleReg)
			setLinkText(linkTextLogin)
			setHref(linkHrefLogin)
			setText(textLogin)
		} else if (variant === 'forgot') {
			setTitle(titleForgot)
			setText(textForgot)
			setHref(linkHrefReg)
		}
	}, [variant])

	return (
		<Stack {...componentStyles}>
			<Stack {...containerStyles}>
				<Heading
					as="h1"
					{...titleStyles}
				>
					{title}
				</Heading>
				<HStack {...wrapperStyles}>
					<Text {...textStyles}>
						{text}
					</Text>

					<Link
						as={NavLink}
						href={href}
						{...linkStyles}
					>
						{linkText}
					</Link>
				</HStack>
			</Stack>
		</Stack>

	)
}
