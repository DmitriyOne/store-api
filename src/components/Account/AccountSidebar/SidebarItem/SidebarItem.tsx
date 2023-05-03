import { FC } from 'react'

import { Link } from '@chakra-ui/react'

interface IProps {
	label: string;
	active?: boolean;
	onClick: () => void;
}

export const SidebarItem: FC<IProps> = ({ label, active, onClick }) => {
	
	return (
		<Link
			href="#"
			fontSize="lg"
			fontWeight={active ? 'bold' : 'normal'}
			color={active ? 'blue.500' : 'gray.500'}
			onClick={onClick}
		>
			{label}
		</Link>
	)
}
