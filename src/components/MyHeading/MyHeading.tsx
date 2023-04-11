import { FunctionComponent, ReactNode } from 'react'

import { Heading, HeadingProps } from '@chakra-ui/react'

import { EHeading } from '@enums'

interface IProps extends HeadingProps {
	as?: keyof typeof EHeading
	children: ReactNode
}

export const MyHeading: FunctionComponent<IProps> = ({
	as = 'h1',
	children,
	...props
}) => {

	return (
		<Heading as={as} {...props}>
			{children}
		</Heading>
	)
}
