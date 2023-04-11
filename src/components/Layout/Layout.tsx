import { FC, ReactNode } from 'react'

import { Header } from './Header/Header'

interface IProps {
	children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
		</>
	)
}
