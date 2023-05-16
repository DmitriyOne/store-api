import { createContext } from 'react'

import { IEditField } from '@interfaces'

const defaultValue: IEditField = {
	editing: null,
	startEditing: () => { },
	stopEditing: () => { },
}

export const EditContext = createContext<IEditField>(defaultValue)
