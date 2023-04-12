import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { cartActions } from '@services/reducers'

const actions = {
	...cartActions,
}

export const useAppActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
