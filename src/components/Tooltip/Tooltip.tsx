import { FC } from 'react'
import { IconType } from 'react-icons'

import { Button, Icon, PlacementWithLogical, Tooltip as TooltipChakraUi, useColorModeValue } from '@chakra-ui/react'

interface IProps {
	label: string
	placement?: PlacementWithLogical
	icon: IconType
}

export const Tooltip: FC<IProps> = ({ label, placement = 'top', icon }) => {

	return (
		<TooltipChakraUi
			label={label}
			bg="white"
			placement={placement}
			color="gray.800"
			fontSize="1em"
		>
			<Button
				display="flex"
				position="absolute"
				top={{ base: '1', lg: '2' }}
				right={{ base: '1', lg: '2' }}
				p="2"
				bg={useColorModeValue('red.50', 'transparent')}
				_hover={{
					bg: useColorModeValue('red.100', 'transparent'),
				}}
			>
				<Icon
					as={icon}
					h={5}
					w={5}
					alignSelf="center"
				/>
			</Button>
		</TooltipChakraUi >
	)
}
