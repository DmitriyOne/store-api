import { FC } from 'react'

import { Box, Text } from '@chakra-ui/react'

import { descriptionTextStyles, descriptionWrapStyles } from '../product-details.styles'

interface IProps {
	desc: string
}

export const ProductDesc: FC<IProps> = ({ desc }) => (
	<Box {...descriptionWrapStyles}>
		<Text as="p" {...descriptionTextStyles}>
			{desc}
		</Text>
	</Box>
)
