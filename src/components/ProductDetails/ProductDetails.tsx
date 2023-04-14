import { FC } from 'react'
import { FiHeart, FiShoppingBag } from 'react-icons/fi'

import { Box, Button, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { useWindowSize } from '@hooks'

import { Heading } from '@components'
import { ProductRating } from '@components/ProductItem/ProductRating'

import { btnCartStyles, btnFavoritesStyles, btnWrapStyles, categoryTextStyles, categoryWrapStyles, componentStyles, contextWrapStyles, descriptionTextStyles, descriptionWrapStyles, iconCartStyles, iconFavoritesStyles, imageStyles, imageWrapStyles, priceTextStyles, priceTextThroughStyles, priceWrapStyles, rateCountTextStyles, rateWrapStyles, titleStyles } from './product-details.styles'

interface IProps {
	product: IProduct
}

export const ProductDetails: FC<IProps> = ({ product }) => {
	const { isMobile, isDesktop } = useWindowSize()

	const priceSale = product.price + 20

	return (
		<Flex {...componentStyles}>

			{isMobile &&
				<>
					<Heading as="h1" {...titleStyles}>
						{product.title}
					</Heading>
					<Box {...categoryWrapStyles}>
						<Text as="span" {...categoryTextStyles}>
							Category: {product.category}
						</Text>
					</Box>
				</>
			}

			{/* Image */}
			<Flex {...imageWrapStyles}>
				<Image
					src={product.image}
					alt={product.title}
					{...imageStyles}
				/>

				{isMobile &&
					<Button
						sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
						{...btnFavoritesStyles}
					>
						<Icon
							as={FiHeart}
							{...iconFavoritesStyles}
						/>
					</Button>
				}
			</Flex>

			{/* Content */}
			<Flex {...contextWrapStyles}>

				{isDesktop &&
					<>
						<Heading as="h1" {...titleStyles}>
							{product.title}
						</Heading>

						<Box {...categoryWrapStyles}>
							<Text as="span" {...categoryTextStyles}>
								Category: {product.category}
							</Text>
						</Box>
					</>
				}

				<Box {...descriptionWrapStyles}>
					<Text as="p" {...descriptionTextStyles}>
						{product.description}
					</Text>
				</Box>

				<Flex {...rateWrapStyles}>
					<ProductRating rating={product.rating.rate} />
					<Text
						as="span"
						{...rateCountTextStyles}
					>
						&nbsp;{product.rating.count}
					</Text>
				</Flex>

				<Box {...priceWrapStyles}>
					<Text as="p" {...priceTextStyles}>
						<Text as="span" {...priceTextThroughStyles}>
							{priceSale}$
						</Text>
						<b>
							&nbsp;{product.price}$
						</b>
					</Text>
				</Box>

				<Stack {...btnWrapStyles}>
					<Button {...btnCartStyles}>
						<Icon
							as={FiShoppingBag}
							{...iconCartStyles}
						/>
						Add to cart
					</Button>

					{isDesktop &&
						<Button
							sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
							{...btnFavoritesStyles}
						>
							Add to favorites
							<Icon
								as={FiHeart}
								{...iconFavoritesStyles}
							/>
						</Button>
					}
				</Stack>

			</Flex>
		</Flex>
	)
}
