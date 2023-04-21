import { FC } from 'react'

import { Divider as DividerChakraUi, HStack, Text } from '@chakra-ui/react'

interface IProps {
	text: string
}

export const Divider: FC<IProps> = ({ text }) => (
	<HStack>
		<DividerChakraUi />
		<Text
			fontSize="sm"
			whiteSpace="nowrap"
			color="muted"
		>
			{text}
		</Text>
		<DividerChakraUi />
	</HStack>
)
