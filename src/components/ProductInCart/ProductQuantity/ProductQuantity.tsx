import { useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { Button, Flex, Icon, Text } from '@chakra-ui/react'

import { buttonStyles, componentStyles, iconStyles, textStyles } from './product-quantity.styles'

interface IProps {

}

export const ProductQuantity = () => {
	const [quantity, setQuantity] = useState(1)

	const incrementQuantity = () => {
		setQuantity(prevCount => prevCount + 1)
	}

	const decrementQuantity = () => {
		setQuantity(prevCount => {
			if (prevCount <= 1) return 1
			return prevCount - 1
		})
	}

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
