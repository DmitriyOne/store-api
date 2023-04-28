import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { cartActions, favoritesActions, userActions } from '@services/reducers'

const actions = {
	...cartActions,
	...favoritesActions,
	...userActions,
}

export const useAppActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
