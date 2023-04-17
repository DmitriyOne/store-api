/* eslint-disable no-unused-vars */
import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { HeaderProvider } from 'src/context'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

import { ChakraProvider } from '@chakra-ui/react'

import { store } from '@services'

import { Layout } from '@components'

import '@styles/global.scss'

export const App: FC<AppProps> = ({ Component, pageProps }) => {

	return (
		<ChakraProvider>
			<Provider store={store}>
				<HeaderProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</HeaderProvider>
			</Provider>
		</ChakraProvider>
	)
}

export default App
