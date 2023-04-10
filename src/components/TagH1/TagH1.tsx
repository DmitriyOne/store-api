import { FC } from 'react'

import styles from './tag-h1.module.scss'

interface IProps {
	title: string
}

export const TagH1: FC<IProps> = ({ title }) => {
	return (
		<h1 className={styles.component}>
			{title}
		</h1>
	)
}
