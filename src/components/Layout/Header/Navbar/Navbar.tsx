import { useDisclosure } from '@chakra-ui/react'

import { MenuBurger } from './MenuBurger'
import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

export const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<MenuBurger
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
			/>

			<MenuDesktop />

			{isOpen &&
				<MenuMobile
					onClose={onClose}
				/>
			}
		</>
	)
}
