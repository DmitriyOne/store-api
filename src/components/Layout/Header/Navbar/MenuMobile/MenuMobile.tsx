import { FC } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

interface IProps {
	onClose: () => void
}

export const MenuMobile: FC<IProps> = ({ onClose }) => {
	const { menuMobBoxStyles } = useCustomStyles()

	return (
		<Box
			as="nav"
			pb={4}
			display={{ md: 'none' }}
			position="fixed"
			top="0"
			left="0"
			width="full"
			height="full"
			{...menuMobBoxStyles}
		>
			<Flex
				as="ul"
				direction="column"
				justify="center"
				align="center"
				height="full"
			>
				{menuItem.map((item, idx) => (
					<NavLink
						key={idx}
						menu={item}
						onClick={onClose}
					/>
				))}
			</Flex>
		</Box>
	)
}
