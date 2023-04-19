import { FC, useEffect, useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { componentStyles, textStyles } from './products-error.styles'

interface IProps {
	isError?: boolean
	isNotFound?: boolean
}

export const ProductsError: FC<IProps> = ({ isError, isNotFound }) => {
	const [msg, setMsg] = useState('')

	const errorMsg = 'Its a pity. Something went wrong..'
	const notFoundMsg = 'Its a pity. Not found products'
	const defaultMsg = 'Its a pity. An unknown error has occurred. Try again.'

	useEffect(() => {

		if (isError) {
			setMsg(errorMsg)
		} else if (isNotFound) {
			setMsg(notFoundMsg)
		} else {
			setMsg(defaultMsg)
		}

	}, [isError, isNotFound])

	return (
		<Flex  {...componentStyles}>
			<Text as="p" {...textStyles}>
				{msg}
			</Text>
		</Flex>
	)
}
