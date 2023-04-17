import { FC } from 'react'

import { Breadcrumb, BreadcrumbProps } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { IBreadcrumb } from '@interfaces'

import { BreadcrumbItem } from './BreadcrumbItem'

import { componentStyles } from './breadcrumbs.styles'

interface IProps extends BreadcrumbProps {
	breadcrumbs: IBreadcrumb[]
}

export const MyBreadcrumbs: FC<IProps> = ({ breadcrumbs, ...props }) => {
	const isLast = breadcrumbs.length - 1

	return (
		<Breadcrumb
			separator={<ChevronRightIcon color="gray.500" />}
			{...componentStyles}
			{...props}
		>
			{breadcrumbs?.map((breadcrumb, idx) =>
				<BreadcrumbItem
					key={idx}
					breadcrumb={breadcrumb}
					isLast={isLast === idx}
				/>
			)}
		</Breadcrumb>
	)
}
