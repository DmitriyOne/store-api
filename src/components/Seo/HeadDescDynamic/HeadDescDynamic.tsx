import { FC } from 'react'
import Head from 'next/head'

interface IProps {
	pageDescription?: string
}

export const HeadDescDynamic: FC<IProps> = ({ pageDescription }) => {

	return (
		<Head>
			{pageDescription
				?
				<meta name="description" content={pageDescription} />
				:
				<meta name="robots" content="noindex, nofollow" />
			}
		</Head>
	)
}
