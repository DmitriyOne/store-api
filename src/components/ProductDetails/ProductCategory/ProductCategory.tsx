import { FC } from 'react'

import { Box, Text } from '@chakra-ui/react'

import { categoryTextStyles, categoryWrapStyles } from '../product-details.styles'

interface IProps {
	category: string
}

export const ProductCategory: FC<IProps> = ({ category }) => (
	<Box {...categoryWrapStyles}>
		<Text as="span" {...categoryTextStyles}>
			Category: {category}
		</Text>
	</Box>
)
