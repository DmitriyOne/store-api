import { FC } from 'react'
import Link from 'next/link'

import { Box, Image, Stack, Text } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useCustomStyles } from '@hooks'

import { Heading } from '@components'

import { boxStyles, categoryStyles, componentStyles, imageStyles, stackStyles, titleStyles } from './product-meta.styles'

interface IProps {
	id: number
	title: string
	category: string
	image: string
}

export const ProductMeta: FC<IProps> = ({ id, title, category, image }) => {
	const { cartMetaTextStyles } = useCustomStyles()

	return (
		<Stack {...componentStyles}>
			<Box display="block">
				<Image
					src={image}
					alt={title}
					loading="lazy"
					{...imageStyles}
				/>
			</Box>
			<Box {...boxStyles}>
				<Stack {...stackStyles}>
					<Heading
						as="h4"
						className="text-two-line"
						{...titleStyles}
					>
						<Link href={`${STORE_ROUTES.PRODUCT}/${id}`}>
							{title}
						</Link>
					</Heading>
					<Text
						{...categoryStyles}
						{...cartMetaTextStyles}
					>
						Category: {category}
					</Text>
				</Stack>
			</Box>
		</Stack>
	)
}
