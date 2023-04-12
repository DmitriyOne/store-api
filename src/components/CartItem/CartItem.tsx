/* eslint-disable no-unused-vars */
import { FC } from 'react'

import { CloseButton, Flex, Link } from '@chakra-ui/react'

import { ICart } from '@interfaces'

import { CartMeta } from './CartMeta'
import { CartPrice } from './CartPrice'

interface IProps {
	product: ICart
	onChangeQuantity?: (id: number) => void
	onClickDelete?: () => void
}

export const CartItem: FC<IProps> = ({ product, onChangeQuantity, onClickDelete }) => {

	return (
		<Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
			<CartMeta
				title={product.title}
				category={product.category}
				image={product.image}
			/>

			{/* Desktop */}
			<Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
				<CartPrice price={product.price} />
				<CloseButton
					aria-label={`Delete ${name} from cart`}
					onClick={onClickDelete}
				/>
			</Flex>

			{/* Mobile */}
			<Flex
				mt="4"
				align="center"
				width="full"
				justify="space-between"
				display={{ base: 'flex', md: 'none' }}
			>
				<Link fontSize="sm" textDecor="underline">
					Delete
				</Link>
				<CartPrice price={product.price} />
			</Flex>
		</Flex>
	)
}
