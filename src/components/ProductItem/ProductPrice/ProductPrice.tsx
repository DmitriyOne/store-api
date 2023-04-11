import { FC } from 'react'

import { Box } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

interface IProps {
	price: number
}

export const ProductPrice: FC<IProps> = ({ price }) => {
	const { productPriceBoxStyles } = useCustomStyles()

	return (
		<Box
			fontSize="lg"
			paddingTop={3}
			{...productPriceBoxStyles}
		>
			<Box
				as="span"
				fontSize="lg"
				{...productPriceBoxStyles}
			>
				£
			</Box>
			{price}
		</Box>

	)
}
