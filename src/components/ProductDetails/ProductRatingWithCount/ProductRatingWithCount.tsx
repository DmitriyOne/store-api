import { FC } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { ProductRating } from '@components/ProductItem/ProductRating'

import { rateCountTextStyles, rateWrapStyles } from '../product-details.styles'

interface IProps {
	rating: { rate: number, count: number }
}

export const ProductRatingWithCount: FC<IProps> = ({ rating }) => (

	<Flex {...rateWrapStyles}>
		<ProductRating rating={rating.rate} />
		<Text
			as="span"
			{...rateCountTextStyles}
		>
			&nbsp;{rating.count}
		</Text>
	</Flex>
)
