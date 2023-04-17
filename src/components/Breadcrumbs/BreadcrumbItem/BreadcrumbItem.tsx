import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BreadcrumbItem as BreadcrumbItemChakraUi, BreadcrumbLink } from '@chakra-ui/react'

import { IBreadcrumb } from '@interfaces'

export const BreadcrumbItem: FC<IBreadcrumb> = ({ href, title }) => {
	const router = useRouter()
	const isActive = router.pathname === href

	return (
		<BreadcrumbItemChakraUi isCurrentPage={isActive}>
			{isActive ? (
				<BreadcrumbLink>{title}</BreadcrumbLink>
			) : (
				<Link href={href} passHref>
					<BreadcrumbLink>{title}</BreadcrumbLink>
				</Link>
			)}
		</BreadcrumbItemChakraUi>
	)
}
