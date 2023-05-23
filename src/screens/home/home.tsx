import { MdArrowRightAlt } from 'react-icons/md'

import { Box, ListIcon, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'

import { Heading } from '@components'

import { headingStyles, itemStyles, textStyles, wrapperStyles } from './home.styles'

export const Home = () => {
	return (
		<>
			<Heading {...headingStyles}>
				Welcome!
			</Heading>
			<Stack {...wrapperStyles}>
				<Box>
					<Text {...textStyles}>
						This application uses:
					</Text>
					<UnorderedList>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							React v18
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							NextJS v13
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							Firebase
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							TypeScript
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							Chakra UI
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							Redux toolkit
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							RTK query
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							React hook form
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							Module SCSS
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							ES Lint/Stylelint
						</ListItem>
					</UnorderedList>
				</Box>
				<Box>
					<Text {...textStyles}>
						What can be done in this application?
					</Text>
					<UnorderedList>
						<ListItem  {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							Add your product to cart or favorites
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							Filter the product by different criteria
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							Find the right product by its name
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							View all data of the selected product
						</ListItem>
						<ListItem {...itemStyles}>
							<ListIcon as={MdArrowRightAlt} />
							Login or authorize in your cabinet (still under development. will be done through firebase).
						</ListItem>
					</UnorderedList>
				</Box>
				<Text as="b">
					Walk on it and you will understand how comfortable it is.
				</Text>
			</Stack>
		</>
	)
}
