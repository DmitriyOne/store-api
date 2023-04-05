import { FC } from 'react'

import { Button, GeneratorSvg } from '@components'

import { useOverflow } from '@hooks'

import styles from './burger.module.scss'

interface IProps {
	burgerToggle: () => void;
	burgerIsOpen: boolean;
}

export const Burger: FC<IProps> = ({ burgerIsOpen, burgerToggle }) => {
	useOverflow(burgerIsOpen)
	const burgerIcon = burgerIsOpen ? 'close' : 'burger'

	return (
		<Button
			className={styles.component}
			onClick={burgerToggle}
		>
			<GeneratorSvg id={burgerIcon} />
		</Button >
	)
}
