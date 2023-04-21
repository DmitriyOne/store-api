import { FC } from 'react'
import NavLink from 'next/link'

import { Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'

import { IFormHeader } from '@interfaces'

import { componentStyles, containerStyles, linkStyles, textStyles, titleStyles, wrapperStyles } from './form-header.styles'

export const FormHeader: FC<IFormHeader> = ({ title, text, linkText, href }) => (
	<Stack {...componentStyles}>
		<Stack {...containerStyles}>
			<Heading as="h1" {...titleStyles}>
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
