/* eslint-disable no-unused-vars */
import { ChangeEvent, FC } from 'react'

import { Select } from '@chakra-ui/react'

import { EFilter } from '@enums'

import { componentStyles } from './filter-select.styles'

interface IProps {
	value: string
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const FilterSelect: FC<IProps> = ({ value, onChange }) => {

	return (
		<Select
			value={value}
			onChange={onChange}
			{...componentStyles}
		>
			<option value={EFilter.None}>
				None
			</option>
			<option value={EFilter.AZ}>
				From A to Z
			</option>
			<option value={EFilter.PriceUp}>
				From price up
			</option>
			<option value={EFilter.PriceDown}>
				From price down
			</option>
		</Select>
	)
}
