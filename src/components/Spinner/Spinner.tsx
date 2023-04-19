import { Flex, Spinner as SpinnerChakraUi } from '@chakra-ui/react'

export const Spinner = () => {

	return (
		<Flex w="full" justifyContent="center" alignItems="center" mt="60px">
			<SpinnerChakraUi
				thickness="4px"
				speed="0.65s"
				size="lg"
				borderColor="gray.500 !important"
				borderLeftColor="gray.200 !important"
				borderBottomColor="gray.200 !important"
			/>
		</Flex>
	)
}
