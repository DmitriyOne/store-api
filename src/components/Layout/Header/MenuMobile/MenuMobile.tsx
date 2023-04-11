import { FC } from 'react'

import { Box, Stack } from '@chakra-ui/react'

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
		>
			<Stack
				as="ul"
				spacing={4}
			>
				{menuItem.map((item, idx) => (
					<NavLink
						key={idx}
						menu={item}
						onClick={onClose}
					/>
				))}
			</Stack>
		</Box>
	)
}
