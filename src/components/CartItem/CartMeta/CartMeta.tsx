import { FC } from 'react'

import { Box, Image, Stack, Text } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { Heading } from '@components'

import { boxStyles, categoryStyles, componentStyles, imageStyles, stackStyles, titleStyles } from './cart-meta.styles'

interface IProps {
	title: string
	category: string
	image: string
}

export const CartMeta: FC<IProps> = ({ title, category, image }) => {
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
						{title}
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
