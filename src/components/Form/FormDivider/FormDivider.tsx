import { Divider, HStack, Text } from '@chakra-ui/react'

export const FormDivider = () => {
	
	return (
		<HStack>
			<Divider />
			<Text
				fontSize="sm"
				whiteSpace="nowrap"
				color="muted"
			>
				or continue with
			</Text>
			<Divider />
		</HStack>
	)
}
