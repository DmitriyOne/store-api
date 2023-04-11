import { FC } from 'react'

import { Box, useColorModeValue } from '@chakra-ui/react'

interface IProps {
	price: number
}

export const ProductPrice: FC<IProps> = ({ price }) => {

	return (
		<Box
			fontSize="lg"
			color={useColorModeValue('gray.800', 'white')}
			paddingTop={3}
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
