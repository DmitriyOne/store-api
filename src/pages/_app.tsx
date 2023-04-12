import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { ChakraProvider } from '@chakra-ui/react'

import { store } from '@services'

import { Layout } from '@components'

import '@styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {

	return (
		<ChakraProvider>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</ChakraProvider>
	)
}
