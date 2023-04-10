import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { Layout } from '@components'

import { store } from 'src/reducer'

import '@styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
