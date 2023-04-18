import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import { IPagination } from '@interfaces'

export const Pagination: FC<IPagination> = ({
	pageCount,
	handlePageClick,
}) => {

	return (
		<ReactPaginate
			previousLabel={'← Previous'}
			nextLabel={'Next →'}
			pageCount={pageCount}
			onPageChange={handlePageClick}
			containerClassName={'pagination'}
			previousLinkClassName={'pagination__link'}
			nextLinkClassName={'pagination__link'}
			disabledClassName={'pagination__link--disabled'}
			activeClassName={'pagination__link--active'}
		/>
	)
}
