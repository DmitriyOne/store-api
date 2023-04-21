import { createContext } from 'react'

import { IAlert } from '@interfaces'

export const AlertContext = createContext<IAlert>({ message: '' })
