
import { Stack, Text } from '@chakra-ui/react'

import { useAppSelector } from '@hooks'

import { Heading, ShortProductItem } from '@components'

import { containerStyles, titleStyles } from './favorites.styles'

export const Favorites = () => {
	const { favorites } = useAppSelector(state => state)

	return (
		<>
			<Heading {...titleStyles}>
				Favorites products ({favorites.length} items)
			</Heading>

			{favorites.length >= 1
				?
				<Stack {...containerStyles}>
					{favorites.map((product) => (
						<ShortProductItem
							key={product.id}
							product={product}
							variant="favorites"
						/>
					))}
				</Stack>
				:
				<>
					<Text>
						Sorry, you don&rsquo;t have items in favorites.
					</Text>
				</>
			}
		</>
	)
}
