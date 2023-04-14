import { FC } from 'react'
import { FiHeart } from 'react-icons/fi'

import { Button, Icon, Tooltip } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { useAppActions, useAppSelector, useWindowSize } from '@hooks'

import { buttonStyles, iconStylesActive, iconStylesDefault, tooltipStyles } from './product-tooltip.styles'

interface IProps {
	product: IProduct
}

export const ProductTooltip: FC<IProps> = ({ product }) => {
	const { favorites } = useAppSelector(state => state)
	const { onToggleItemFavorites } = useAppActions()
	const { isMobile } = useWindowSize()

	const isExistInFavorites = favorites.some(item => item.id === product.id)
	const label = isExistInFavorites ? 'Remove from favorites' : 'Add to favorites'

	const onToggle = () => {
		onToggleItemFavorites(product)
	}

	const iconStyles = isExistInFavorites ? { ...iconStylesActive } : { ...iconStylesDefault }
	return (
		<Tooltip
			label={label}
			placement="top"
			isDisabled={isMobile}
			{...tooltipStyles}
		>
			<Button
				onClick={onToggle}
				sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
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
