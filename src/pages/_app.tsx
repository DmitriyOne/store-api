/* eslint-disable no-unused-vars */
import { FC, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AuthProvider, HeaderProvider } from 'src/context'

import { ChakraProvider } from '@chakra-ui/react'

import { wrapper } from '@services'

import { Layout } from '@components'

import '@styles/global.scss'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export const App: FC<AppPropsWithLayout> = ({ Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest)
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<Provider store={store}>
			<ChakraProvider>
				<AuthProvider>
					<HeaderProvider>
						<Layout>
							{getLayout(<Component {...props.pageProps} />)}
						</Layout>
					</HeaderProvider>
				</AuthProvider>
			</ChakraProvider>
		</Provider>
	)
}

export default App
