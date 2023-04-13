import { createContext } from 'react'

interface IProps {
	isOpenNav: boolean
	onOpenNav: () => void
	onCloseNav: () => void
}

const defaultValue: IProps = {
	isOpenNav: false,
	onOpenNav: () => { },
	onCloseNav: () => { },
}

export const HeaderContext = createContext<IProps>(defaultValue)
