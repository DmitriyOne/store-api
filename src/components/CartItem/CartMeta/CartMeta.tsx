import { FC } from 'react'
import Image from 'next/image'

import {
	Box,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'

interface IProps {
	title: string
	category: string
	image: string
}

export const CartMeta: FC<IProps> = ({ title, category, image }) => {

	return (
		<Stack
			direction="row"
			spacing="5"
			width="full"
		>
			<Image
				width="120"
				height="120"
				src={image}
				alt={title}
				draggable="false"
				loading="lazy"
			/>
			<Box pt="4">
				<Stack spacing="0.5">
					<Text fontWeight="medium">
						{title}
					</Text>
					<Text
						color={useColorModeValue('gray.600', 'gray.400')}
						fontSize="sm"
					>
						category:{category}
					</Text>
				</Stack>
			</Box>
		</Stack>
	)
}
