import { FC } from 'react'
import { IconType } from 'react-icons'

import { Button, Icon, PlacementWithLogical, Tooltip as TooltipChakraUi } from '@chakra-ui/react'

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
			fontSize="1.2em"
		>
			<Button display="flex">
				<Icon
					as={icon}
					h={7}
					w={7}
					alignSelf="center"
				/>
			</Button>
		</TooltipChakraUi>
	)
}
