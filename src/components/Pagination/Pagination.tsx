import { FC } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { IPagination } from '@interfaces'

export const Pagination: FC<IPagination> = ({
	onPagination,
	totalProducts,
	productsPerPage,
}) => {

	let pageNumbers = []
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i)
	}

	console.log('total: ', totalProducts)
	console.log('per page: ', productsPerPage)

	return (
		<Flex>
			{pageNumbers.map((number, idx) => (
				<Box
					as="div"
					key={idx}
					onClick={() => onPagination(number)}
				>
					{number}
				</Box>
			))}
		</Flex>
	)
}
