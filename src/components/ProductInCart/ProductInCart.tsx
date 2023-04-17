import { FC } from 'react'

import { Button, CloseButton, Flex } from '@chakra-ui/react'

import { IShortProduct } from '@interfaces'

import { useAppActions, useWindowSize } from '@hooks'

import { ProductMeta } from './ProductMeta'
import { ProductPrice } from './ProductPrice'
import { ProductQuantity } from './ProductQuantity'

import { buttonOnMobileStyles, componentStyles, flexOnDesktopStyles, flexOnMobileStyles } from './product-in-cart.styles'

interface IProps {
	product: IShortProduct
}

export const ProductInCart: FC<IProps> = ({ product }) => {
	const { isMobile } = useWindowSize()
	const { onRemoveItemCart, onAddItemCart } = useAppActions()

	const onRemove = () => {
		onRemoveItemCart(product)
	}

	return (
		<Flex {...componentStyles}>
			<ProductMeta
				id={product.id}
				title={product.title}
				category={product.category}
				image={product.image}
			/>

			<ProductQuantity
				quantity={product.quantity}
				incrementQuantity={() => onAddItemCart(product)}
				decrementQuantity={() => onRemoveItemCart(product)}
			/>

			{isMobile
				?
				<Flex {...flexOnMobileStyles}>
					<Button
						aria-label={`Delete ${product.title} from cart`}
						onClick={onRemove}
						{...buttonOnMobileStyles}
					>
						Delete
					</Button>
					<ProductPrice price={product.price} quantity={product.quantity} />
				</Flex>
				:
				<Flex {...flexOnDesktopStyles}>
					<ProductPrice price={product.price} quantity={product.quantity} />
					<CloseButton
						aria-label={`Delete ${product.title} from cart`}
						onClick={onRemove}
					/>
				</Flex>
			}
		</Flex>
	)
}
