import { FC } from 'react'
import { IconType } from 'react-icons'

import { Button, ButtonProps, Icon, PlacementWithLogical, Tooltip as TooltipChakraUi } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { buttonStyles, iconStyles, tooltipStyles } from './tooltip.styles'

interface IProps extends ButtonProps {
	label: string
	placement?: PlacementWithLogical
	icon: IconType
}

export const Tooltip: FC<IProps> = ({ label, placement = 'top', icon, ...props }) => {
	const { tooltipButtonStyles } = useCustomStyles()

	return (
		<TooltipChakraUi
			label={label}
			placement={placement}
			{...tooltipStyles}
		>
			<Button
				{...props}
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
