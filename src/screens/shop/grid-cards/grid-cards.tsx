import { FC } from 'react'

import { SimpleGrid } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { usePagination } from '@hooks'

import { Pagination, ProductItem, ProductsError, Spinner } from '@components'

import { componentStyles } from './grid-cards.styles'

interface IProps {
	isLoading: boolean
	isError: boolean
	products: IProduct[]
}

export const GridCards: FC<IProps> = ({ isLoading, isError, products }) => {
	const { pageProducts, pageCount, handlePageClick } = usePagination(products)

	if (isLoading) {
		return <Spinner />
	}

	if (isError) {
		return <ProductsError isError />
	}

	return (
		<>
			{pageProducts.length >= 1
				?
				<>
					<SimpleGrid {...componentStyles}>
						{pageProducts.map(product =>
							<ProductItem
								key={product.id}
								product={product}
							/>
						)}
					</SimpleGrid>

					{pageCount >= 2 &&
						<Pagination
							pageCount={pageCount}
							handlePageClick={handlePageClick}
						/>
					}
				</>
				:
				<ProductsError isNotFound />
			}

		</>
	)
}
