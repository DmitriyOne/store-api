import { MdArrowRightAlt } from 'react-icons/md'

import { Box, ListIcon, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'

import { Heading } from '@components'

import { headingStyles, textStyles, wrapperStyles } from './home.styles'

export const Home = () => {
	return (
		<>
			<Heading {...headingStyles}>
				Добро пожаловать!
			</Heading>
			<Stack {...wrapperStyles}>
				<Box>
					<Text {...textStyles}>
						В этом приложении используется:
					</Text>
					<UnorderedList>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							React v18
						</ListItem>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							NextJS v13
						</ListItem>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							TypeScript
						</ListItem>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							Chakra UI
						</ListItem>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							Redux toolkit
						</ListItem>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							RTK query
						</ListItem>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							React hook form
						</ListItem>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							Module SCSS
						</ListItem>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							ES Lint/Stylelint
						</ListItem>
					</UnorderedList>
				</Box>
				<Box>
					<Text {...textStyles}>
						Что можно сделать в этом приложении? <br />
					</Text>
					<UnorderedList>
						<ListItem >
							<ListIcon as={MdArrowRightAlt} />
							Добавить свой товар в корзину или избранное
						</ListItem>
						<ListItem>
							<ListIcon as={MdArrowRightAlt} />
							Выполнить фильтр товара по разным критериям
						</ListItem>
						<ListItem>
							<ListIcon as={MdArrowRightAlt} />
							Найти нужный товар по его названию
						</ListItem>
						<ListItem>
							<ListIcon as={MdArrowRightAlt} />
							Посмотреть все данные выбранного товара
						</ListItem>
						<ListItem>
							<ListIcon as={MdArrowRightAlt} />
							Произвести логин или авторизацию в свой кабнет (пока в стадии разрабтке. будет сделанно через firebase).
						</ListItem>
					</UnorderedList>
				</Box>
			</Stack>
		</>
	)
}
