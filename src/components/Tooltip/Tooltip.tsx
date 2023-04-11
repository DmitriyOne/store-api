import { FC } from 'react'
import { IconType } from 'react-icons'

import { Button, Icon, PlacementWithLogical, Tooltip as TooltipChakraUi } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

interface IProps {
	label: string
	placement?: PlacementWithLogical
	icon: IconType
}

export const Tooltip: FC<IProps> = ({ label, placement = 'top', icon }) => {
	const { tooltipButtonStyles } = useCustomStyles()

	return (
		<TooltipChakraUi
			label={label}
			placement={placement}

			bg="white"
			color="gray.800"
			fontSize="1em"
		>
			<Button
				display="flex"
				position="absolute"
				top={{ base: '1', lg: '2' }}
				right={{ base: '1', lg: '2' }}
				p="2"
				{...tooltipButtonStyles}
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
