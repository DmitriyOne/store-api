import { Head, Html, Main, NextScript } from 'next/document'

import { HeadFavicon } from '@components'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<HeadFavicon />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
