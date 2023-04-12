import { FC } from 'react'

import { HStack, Text } from '@chakra-ui/react'

interface IProps {
	price: number
}

export const CartPrice: FC<IProps> = ({ price }) => {

	return (
		<HStack spacing="1">
			<Text
				as="span"
				fontWeight="medium"
				color="red.500"
			>
				{price}$
			</Text>
		</HStack>
	)
}
