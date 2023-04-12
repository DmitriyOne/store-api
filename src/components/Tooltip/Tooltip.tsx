import { FC } from 'react'
import { IconType } from 'react-icons'

import { Button, Icon, PlacementWithLogical, Tooltip as TooltipChakraUi } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { buttonStyles, iconStyles, tooltipStyles } from './tooltip.styles'

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
			{...tooltipStyles}
		>
			<Button
				{...buttonStyles}
				{...tooltipButtonStyles}
			>
				<Icon
					as={icon}
					{...iconStyles}
				/>
			</Button>
		</TooltipChakraUi >
	)
}
