/* eslint-disable no-unused-vars */
import { FC, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { ChakraProvider } from '@chakra-ui/react'

import { store } from '@services'
import { AlertProvider, ConfirmProvider, HeaderProvider } from '@context'

import { Layout } from '@components'

import '@firebase'

import '@styles/global.scss'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<Provider store={store}>
			<ChakraProvider>
				<ConfirmProvider>
					<AlertProvider>
						<HeaderProvider>
							<Layout>
								{getLayout(<Component {...pageProps} />)}
							</Layout>
						</HeaderProvider>
					</AlertProvider>
				</ConfirmProvider>
			</ChakraProvider>
		</Provider>
	)
}

export default App
