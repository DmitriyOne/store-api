import { FunctionComponent, ReactNode } from 'react'

import { As, Heading as HeadingChakraUi, HeadingProps } from '@chakra-ui/react'

interface IProps extends HeadingProps {
	as?: As
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
