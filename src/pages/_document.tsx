import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { HeadFavicon } from '@components'

class MainDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			<Html translate="no" lang="ru">
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
}

export default MainDocument
