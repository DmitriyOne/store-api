/* eslint-disable no-unused-vars */
import { FC } from 'react'

import { Button, CloseButton, Flex } from '@chakra-ui/react'

import { ICart } from '@interfaces'

import { useWindowSize } from '@hooks/useWindowSize'

import { CartMeta } from './CartMeta'
import { CartPrice } from './CartPrice'

import { buttonOnMobileStyles, componentStyles, flexOnMobileStyles } from './cart-item.styles'

interface IProps {
	product: ICart
	onChangeQuantity?: (id: number) => void
	onClickDelete?: () => void
}

export const CartItem: FC<IProps> = ({ product, onChangeQuantity, onClickDelete }) => {
	const { isMobile } = useWindowSize()

	return (
		<Flex {...componentStyles}>
			<CartMeta
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
					<CartPrice price={product.price} />
				</Flex>
				:
				<>
					<CartPrice price={product.price} />
					<CloseButton
						aria-label={`Delete ${product.title} from cart`}
						onClick={onClickDelete}
					/>
				</>
			}
		</Flex>
	)
}
