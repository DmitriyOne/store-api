/* eslint-disable no-unused-vars */
import { ChangeEvent, FC } from 'react'

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import { componentStyles, inputIconStyles, inputStyles } from './filter-search.styles'

interface IProps {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const FilterSearch: FC<IProps> = ({ value, onChange }) => {

	return (
		<InputGroup {...componentStyles}>
			<InputLeftElement
				pointerEvents="none"
				{...inputIconStyles}
			>
				<Search2Icon color="gray.300" />
			</InputLeftElement>
			<Input
				type="text"
				placeholder="Search..."
				value={value}
				onChange={onChange}
				{...inputStyles}
			/>
		</InputGroup>
	)
}
