import { FC } from 'react'

import { Breadcrumb } from '@chakra-ui/react'

import { IBreadcrumb } from '@interfaces'

import { BreadcrumbItem } from './BreadcrumbItem'

interface IProps {
	breadcrumbs: IBreadcrumb[]
}

export const MyBreadcrumbs: FC<IProps> = ({ breadcrumbs }) => {

	return (
		<Breadcrumb>
			{breadcrumbs.map((breadcrumb, index) => (
				<BreadcrumbItem key={index} {...breadcrumb} />
			))}
		</Breadcrumb>
	)
}
