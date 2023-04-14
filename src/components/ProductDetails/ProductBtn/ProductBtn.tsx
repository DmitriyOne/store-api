import { FC } from 'react'
import { IconType } from 'react-icons'

import { Button, Icon } from '@chakra-ui/react'

interface IProps {
	text?: string
	icon: IconType
	iconPosition: 'left' | 'right'
	btnStyle: any
	iconStyle: any
	isDisabled?: boolean
	onClick: () => void
}

export const ProductBtn: FC<IProps> = ({
	text,
	icon,
	iconPosition,
	btnStyle,
	iconStyle,
	isDisabled = false,
	onClick,
}) => {

	return (
		<Button
			onClick={onClick}
			isDisabled={isDisabled}
			{...btnStyle}
		>
			{iconPosition === 'left' && <Icon as={icon} {...iconStyle} />}
			{text}
			{iconPosition === 'right' && <Icon as={icon} {...iconStyle} />}
		</Button>
	)
}
