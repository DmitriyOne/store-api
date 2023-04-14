import { FC } from 'react'
import { FiHeart, FiShoppingBag } from 'react-icons/fi'

import { Flex, Stack } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { useAppActions, useAppSelector, useWindowSize } from '@hooks'

import { ProductBtn } from './ProductBtn'
import { ProductCategory } from './ProductCategory'
import { ProductDesc } from './ProductDesc'
import { ProductHeading } from './ProductHeading'
import { ProductImage } from './ProductImage'
import { ProductPrice } from './ProductPrice'
import { ProductRatingWithCount } from './ProductRatingWithCount'

import { btnCartDefaultStyles, btnCartDisabledStyles, btnFavoritesStyles, btnWrapStyles, componentStyles, contextWrapStyles, iconCartStyles, iconFavActiveStyles, iconFavDefaultStyles } from './product-details.styles'

interface IProps {
	product: IProduct
}

export const ProductDetails: FC<IProps> = ({ product }) => {
	const { isMobile, isDesktop } = useWindowSize()
	const { cart, favorites } = useAppSelector(state => state)
	const { onAddItemCart, onToggleItemFavorites } = useAppActions()

	const isExistInCart = cart.items.some(item => item.id === product.id)
	const isExistInFavorites = favorites.some(item => item.id === product.id)

	const addToCart = () => {
		if (isExistInCart) return
		onAddItemCart(product)
	}

	const onToggleFavorites = () => {
		onToggleItemFavorites(product)
	}

	const btnCartText = isExistInCart ? 'Already in cart' : 'Add to cart'
	const btnFavoritesText = isExistInFavorites ? 'Already in favorites' : 'Add to favorites'

	const btnCartStyles = isExistInCart ? { ...btnCartDisabledStyles } : { ...btnCartDefaultStyles }
	const iconFavStyles = isExistInFavorites ? { ...iconFavActiveStyles } : { ...iconFavDefaultStyles }

	return (
		<Flex {...componentStyles}>

			{isMobile &&
				<>
					<ProductHeading title={product.title} />
					<ProductCategory category={product.category} />
				</>
			}

			<ProductImage
				src={product.image}
				title={product.title}
				onClickFavorite={onToggleFavorites}
			/>

			<Flex {...contextWrapStyles}>
				{isDesktop &&
					<>
						<ProductHeading title={product.title} />
						<ProductCategory category={product.category} />
					</>
				}

				<ProductDesc desc={product.description} />
				<ProductRatingWithCount rating={product.rating} />
				<ProductPrice price={product.price} />

				<Stack {...btnWrapStyles}>
					<ProductBtn
						text={btnCartText}
						onClick={addToCart}
						iconPosition="left"
						icon={FiShoppingBag}
						btnStyle={btnCartStyles}
						iconStyle={iconCartStyles}
					/>

					{isDesktop &&
						<ProductBtn
							text={btnFavoritesText}
							onClick={onToggleFavorites}
							iconPosition="right"
							icon={FiHeart}
							btnStyle={btnFavoritesStyles}
							iconStyle={iconFavStyles}
						/>
					}
				</Stack>
			</Flex>
		</Flex>
	)
}
