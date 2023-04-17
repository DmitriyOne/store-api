import { FC } from 'react'
import { MdCheckCircle } from 'react-icons/md'

import { Box, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'

import { IShortProduct } from '@interfaces'

import { useCustomStyles } from '@hooks'

import { Heading } from '@components'

import { itemPriceStyles, itemTitleStyles, liIconStyles, liStyles, titleStyles } from './order-price-item.styles'

interface IProps {
	items: IShortProduct[]
}

export const OrderPriceItem: FC<IProps> = ({ items }) => {
	const { orderSumItemTextStyles } = useCustomStyles()

	return (
		<Box>
			<Heading
				as="h4"
				{...titleStyles}
				{...orderSumItemTextStyles}
			>
				Items:
			</Heading>
			<UnorderedList>
				{items.map(item =>
					<ListItem
						key={item.title}
						className="text-one-line"
						{...liStyles}
					>
						<ListIcon
							as={MdCheckCircle}
							{...liIconStyles}
						/>
						<Text
							as="p"
							className="text-one-line"
							{...itemTitleStyles}
							{...orderSumItemTextStyles}
						>
							{item.title}
						</Text>
						<Text
							as="span"
							{...itemPriceStyles}
							{...orderSumItemTextStyles}
						>
							{item.price}$
						</Text>
					</ListItem>
				)}
			</UnorderedList>
		</Box>
	)
}
