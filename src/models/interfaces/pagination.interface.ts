/* eslint-disable no-unused-vars */

export interface IPagination {
	pageCount: number
	handlePageClick: ({ selected }: { selected: number }) => void
}
