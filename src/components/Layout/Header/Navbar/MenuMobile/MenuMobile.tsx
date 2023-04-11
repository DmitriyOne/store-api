import { FC } from 'react'

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

interface IProps {
	onClose: () => void
}

export const MenuMobile: FC<IProps> = ({ onClose }) => {

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
			bg={useColorModeValue('gray.100', 'gray.900')}
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
