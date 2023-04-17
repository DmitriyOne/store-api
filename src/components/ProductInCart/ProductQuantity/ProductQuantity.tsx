import { FC } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { Button, Flex, Icon, Text } from '@chakra-ui/react'

import { buttonStyles, componentStyles, iconStyles, textStyles } from './product-quantity.styles'

interface IProps {
	quantity: number
	incrementQuantity: () => void
	decrementQuantity: () => void
}

export const ProductQuantity: FC<IProps> = ({ quantity, incrementQuantity, decrementQuantity }) => {

	return (
		<Flex {...componentStyles}>
			<Button
				onClick={decrementQuantity}
				{...buttonStyles}
			>
				<Icon
					as={AiOutlineMinusCircle}
					{...iconStyles}
				/>
			</Button>

			<Text {...textStyles}>
				{quantity}
			</Text>
			
			<Button
				onClick={incrementQuantity}
				{...buttonStyles}
			>
				<Icon
					as={AiOutlinePlusCircle}
					{...iconStyles}
				/>
			</Button>
		</Flex>
	)
}
