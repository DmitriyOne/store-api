/* eslint-disable no-unused-vars */
import { ChangeEvent, FC } from 'react'

import { Flex } from '@chakra-ui/react'

import { FilterSearch, FilterSelect } from '@components'

import { componentStyles } from './filter-bar.styles'

interface IProps {
	valueSearch: string
	filterValue: string
	onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
	onFilter: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const FilterBar: FC<IProps> = ({ valueSearch, filterValue, onChangeValue, onFilter }) => {

	return (
		<Flex {...componentStyles}>
			<FilterSearch value={valueSearch} onChange={onChangeValue} />
			<FilterSelect value={filterValue} onChange={onFilter} />
		</Flex>
	)
}
