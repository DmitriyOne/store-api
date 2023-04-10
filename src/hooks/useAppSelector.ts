import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../reducer/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
