import { FC } from 'react'
import { FiHeart } from 'react-icons/fi'

import { Flex, Image } from '@chakra-ui/react'

import { useWindowSize } from '@hooks'

import { ProductBtn } from '../ProductBtn'

import { btnFavoritesStyles, imageStyles, imageWrapStyles } from '../product-details.styles'

interface IProps {
	src: string
	title: string
	onClickFavorite: () => void
	iconStyle: any
}

export const ProductImage: FC<IProps> = ({ src, title, onClickFavorite, iconStyle }) => {
	const { isMobile } = useWindowSize()

	return (
		<Flex {...imageWrapStyles}>
			<Image
				src={src}
				alt={title}
				{...imageStyles}
			/>

			{isMobile &&
				<ProductBtn
					onClick={onClickFavorite}
					iconPosition="right"
					icon={FiHeart}
					btnStyle={btnFavoritesStyles}
					iconStyle={iconStyle}
				/>
			}
		</Flex>
	)
}
