import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import { componentStyles, inputIconStyles, inputStyles } from './filter-search.styles'

export const FilterSearch = () => {

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
				{...inputStyles}
			/>
		</InputGroup>
	)
}
