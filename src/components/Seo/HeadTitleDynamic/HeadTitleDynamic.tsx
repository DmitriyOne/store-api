import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface IProps {
	pageTitle?: string
}

export const HeadTitleDynamic: FC<IProps> = ({ pageTitle }) => {
	const router = useRouter()
	const { id } = router.query

	const getTitle = (): string => {
		let pageName = 'Shop'
		if (pageTitle) {
			pageName = `${pageName} | ${pageTitle}`
		} else if (id) {
			pageName = `${pageName} | ${id}`
		} 

		return pageName
	}

	return (
		<Head>
			<title>{getTitle()}</title>
		</Head>
	)
}

