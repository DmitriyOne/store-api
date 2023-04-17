import { FC } from 'react'

import { Box, BreadcrumbItem as BreadcrumbItemChakraUi, BreadcrumbItemProps, BreadcrumbLink } from '@chakra-ui/react'

import { IBreadcrumb } from '@interfaces'

import { linkActiveStyles, linkDefaultStyles } from './breadcrumb-item.styles'

interface IProps extends BreadcrumbItemProps {
	breadcrumb: IBreadcrumb
	isLast: boolean
}

export const BreadcrumbItem: FC<IProps> = ({ breadcrumb, isLast, ...props }) => {

	return (
		<BreadcrumbItemChakraUi isCurrentPage={isLast} {...props}>
			{isLast
				?
				<Box as="span" {...linkActiveStyles}>
					{breadcrumb.label}
				</Box>
				:
				<BreadcrumbLink href={breadcrumb.href} {...linkDefaultStyles}>
					{breadcrumb.label}
				</BreadcrumbLink>
			}

		</BreadcrumbItemChakraUi>
	)
}
