import { FC } from 'react'
import { FiHeart } from 'react-icons/fi'

import { Button, Icon, Tooltip } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { useAppActions, useAppSelector } from '@hooks'

import { buttonStyles, iconStylesActive, iconStylesDefault, tooltipStyles } from './product-tooltip.styles'

interface IProps {
	product: IProduct
}

export const ProductTooltip: FC<IProps> = ({ product }) => {
	const { favorites } = useAppSelector(state => state)
	const { addItemFavorites } = useAppActions()

	const isExistInFavorites = favorites.some(item => item.id === product.id)

	const addToFavorites = () => {
		if (isExistInFavorites) return
		addItemFavorites(product)
	}

	const iconStyles = isExistInFavorites ? { ...iconStylesActive } : { ...iconStylesDefault }
	return (
		<Tooltip
			label="Add to favorites"
			placement="top"
			{...tooltipStyles}
		>
			<Button
				isDisabled={isExistInFavorites}
				onClick={addToFavorites}
				{...buttonStyles}
			>
				<Icon
					as={FiHeart}
					{...iconStyles}
				/>
			</Button>
		</Tooltip >
	)
}
