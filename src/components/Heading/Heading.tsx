import { FunctionComponent, ReactNode } from 'react'

import { Heading as HeadingChakraUi, HeadingProps } from '@chakra-ui/react'

import { EHeading } from '@enums'

interface IProps extends HeadingProps {
	as?: keyof typeof EHeading
	children: ReactNode
}

export const Heading: FunctionComponent<IProps> = ({
	as = 'h1',
	children,
	...props
}) => {

	return (
		<HeadingChakraUi as={as} {...props}>
			{children}
		</HeadingChakraUi>
	)
}
