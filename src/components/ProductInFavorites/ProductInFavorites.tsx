import { FC } from 'react'

import { Button, CloseButton, Flex } from '@chakra-ui/react'

import { IShortProduct } from '@interfaces'

import { useAppActions, useWindowSize } from '@hooks'

import { ProductMeta } from './ProductMeta'

import { buttonOnMobileStyles, componentStyles } from './product-in-favorites.styles'

interface IProps {
	product: IShortProduct
}

export const ProductInFavorites: FC<IProps> = ({ product }) => {
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
				<Button
					aria-label={`Delete ${product.title} from favorites`}
					{...buttonOnMobileStyles}
				>
					Delete
				</Button>
				:
				<CloseButton
					aria-label={`Delete ${product.title} from favorites`}
					onClick={onRemove}
				/>
			}
		</Flex>
	)
}
