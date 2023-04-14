import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { cartActions, favoritesActions } from '@services/reducers'

const actions = {
	...cartActions,
	...favoritesActions,
}

export const useAppActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
