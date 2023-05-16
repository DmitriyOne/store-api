/* eslint-disable no-unused-vars */

export interface IEditField {
	editing: string
	startEditing: (id: string) => void
	stopEditing: () => void
}
