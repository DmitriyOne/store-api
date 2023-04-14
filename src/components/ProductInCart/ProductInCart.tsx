import { FC } from 'react'

import { Button, CloseButton, Flex } from '@chakra-ui/react'

import { IShortProduct } from '@interfaces'

import { useAppActions, useWindowSize } from '@hooks'

import { ProductMeta } from './ProductMeta'
import { ProductPrice } from './ProductPrice'

import { buttonOnMobileStyles, componentStyles, flexOnDesktopStyles, flexOnMobileStyles } from './product-in-cart.styles'

interface IProps {
	product: IShortProduct
}

export const ProductInCart: FC<IProps> = ({ product }) => {
	const { isMobile } = useWindowSize()
	const { removeItemCart } = useAppActions()

	const onRemove = () => {
		removeItemCart(product)
	}

	return (
		<Flex {...componentStyles}>
			<ProductMeta
				id={product.id}
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
					<ProductPrice price={product.price} />
				</Flex>
				:
				<Flex {...flexOnDesktopStyles}>
					<ProductPrice price={product.price} />
					<CloseButton
						aria-label={`Delete ${product.title} from cart`}
						onClick={onRemove}
					/>
				</Flex>
			}
		</Flex>
	)
}
