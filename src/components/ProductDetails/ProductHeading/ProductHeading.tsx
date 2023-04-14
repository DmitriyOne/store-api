import { FC } from 'react'

import { Heading } from '@components'

import { titleStyles } from '../product-details.styles'

interface IProps {
	title: string
}

export const ProductHeading: FC<IProps> = ({ title }) => (
	<Heading as="h1" {...titleStyles}>
		{title}
	</Heading>
)
