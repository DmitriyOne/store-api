import { FC } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

import { Box } from '@chakra-ui/react'

import { boxStyles } from './product-rading.styles'

interface IProps {
	rating: number;
}

export const ProductRating: FC<IProps> = ({ rating }) => {

	return (
		<Box {...boxStyles}>
			{Array(5)
				.fill('')
				.map((_, i) => {
					const roundedRating = Math.round(rating * 2) / 2

					if (roundedRating - i >= 1) {
						return (
							<BsStarFill
								key={i}
								style={{ marginLeft: '1' }}
								color={i < rating ? 'teal.500' : 'gray.300'}
							/>
						)
					}

					if (roundedRating - i === 0.5) {
						return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
					}

					return <BsStar key={i} style={{ marginLeft: '1' }} />
				})}
		</Box>
	)
}
