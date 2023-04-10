import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

const actions = {
	// all actions
}

export const useAppActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
