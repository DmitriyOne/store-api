import { FC, ReactNode, useState } from 'react'

import { EditContext } from './EditContext'

interface IProps {
	children: ReactNode
}

export const EditProvider: FC<IProps> = ({ children }) => {
	const [editing, setEditing] = useState(null);

	const startEditing = (id: string) => {
		setEditing(id)
	}

	const stopEditing = () => {
		setEditing(null)
	}

	const value = {
		editing,
		startEditing,
		stopEditing,
	}

	return (
		<EditContext.Provider value={value}>
			{children}
		</EditContext.Provider>
	)
}
