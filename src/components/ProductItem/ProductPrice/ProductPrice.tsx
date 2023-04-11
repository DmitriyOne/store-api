import { FC } from 'react'

import { Box, useColorModeValue } from '@chakra-ui/react'

interface IProps {
	price: number
}

export const ProductPrice: FC<IProps> = ({ price }) => {

	return (
		<Box
			fontSize="2xl"
			color={useColorModeValue('gray.800', 'white')}
		>
			<Box
				as="span"
				color={useColorModeValue('gray.600', 'white')}
				fontSize="lg"
			>
				£
			</Box>
			{price}
		</Box>

	)
}
