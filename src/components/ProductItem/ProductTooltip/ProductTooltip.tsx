import { FC } from 'react'
import { FiHeart } from 'react-icons/fi'

import { IProduct } from '@interfaces'

import { useAppActions } from '@hooks'

import { Tooltip } from '@components'

interface IProps {
	product: IProduct
}

export const ProductTooltip: FC<IProps> = ({ product }) => {
	const { addItemFavorites } = useAppActions()

	return (
		<Tooltip
			label="Add to favorites"
			icon={FiHeart}
			onClick={() => addItemFavorites(product)}
		/>
	)
}
