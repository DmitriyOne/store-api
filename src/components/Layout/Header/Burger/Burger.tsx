import { FC } from 'react'
import { BsX } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Button } from '@components'

import { useOverflow } from '@hooks'

import styles from './burger.module.scss'

interface IProps {
	burgerToggle: () => void;
	burgerIsOpen: boolean;
}

export const Burger: FC<IProps> = ({ burgerIsOpen, burgerToggle }) => {
	useOverflow(burgerIsOpen)

	return (
		<Button
			className={styles.component}
			onClick={burgerToggle}
		>
			{burgerIsOpen ? <BsX /> : <GiHamburgerMenu />}
		</Button >
	)
}
