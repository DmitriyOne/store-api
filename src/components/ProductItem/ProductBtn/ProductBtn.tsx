import { FC } from 'react'

import { Button, Flex } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { useAppActions, useAppSelector, useCustomStyles } from '@hooks'

import { buttonDisabledStyles, buttonStyles, flexStyles } from './product-btn.styles'

interface IProps {
	product: IProduct
}

export const ProductBtn: FC<IProps> = ({ product }) => {
	const { productBodyButtonStyles } = useCustomStyles()
	const { cart } = useAppSelector(state => state)
	const { onAddItemCart } = useAppActions()
	const isExistInCart = cart.items.some(item => item.id === product.id)

	const addToCart = () => {
		if (isExistInCart) return
		onAddItemCart(product)
	}

	const disabled = isExistInCart ? { ...buttonDisabledStyles } : { ...productBodyButtonStyles }

	return (
		<Flex {...flexStyles}>
			<Button
				onClick={addToCart}
				disabled={isExistInCart}
				{...buttonStyles}
				{...disabled}
			>
				{isExistInCart ? 'Already in cart' : 'Add to cart'}
			</Button>
		</Flex>
	)
}
