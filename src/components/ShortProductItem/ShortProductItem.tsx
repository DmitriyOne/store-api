/* eslint-disable no-unused-vars */
import { FC } from 'react'

import { Button, CloseButton, Flex } from '@chakra-ui/react'

import { IShortProduct } from '@interfaces'

import { useAppActions } from '@hooks'
import { useWindowSize } from '@hooks/useWindowSize'

import { ProductMeta } from './ProductMeta'
import { ProductPrice } from './ProductPrice'

import { buttonOnMobileStyles, componentStyles, flexOnDesktopStyles, flexOnMobileStyles } from './short-product-item.styles'

interface IProps {
	product: IShortProduct
	variant: 'cart' | 'favorites'
}

export const ShortProductItem: FC<IProps> = ({ product, variant }) => {
	const { isMobile } = useWindowSize()
	const { removeItemCart, removeItemFavorites } = useAppActions()

	const onRemove = () => {
		if (variant === 'cart') {
			removeItemCart(product)
		}
		removeItemFavorites(product)
	}

	return (
		<Flex {...componentStyles}>
			<ProductMeta
				title={product.title}
				category={product.category}
				image={product.image}
			/>

			{isMobile
				?
				<Flex {...flexOnMobileStyles}>
					<Button
						aria-label={`Delete ${product.title} from cart`}
						{...buttonOnMobileStyles}
					>
						Delete
					</Button>
					{variant !== 'favorites' && <ProductPrice price={product.price} />}
				</Flex>
				:
				<Flex {...flexOnDesktopStyles}>
					{variant !== 'favorites' && <ProductPrice price={product.price} />}
					<CloseButton
						aria-label={`Delete ${product.title} from cart`}
						onClick={onRemove}
					/>
				</Flex>
			}
		</Flex>
	)
}
