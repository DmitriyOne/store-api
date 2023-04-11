import { FC } from 'react'

import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'

import { Heading } from '@components'

import { IProduct } from '@interfaces'

import { ProductPrice } from '../ProductPrice'
import { ProductRating } from '../ProductRating'

import styles from './product-body.module.scss'

interface IProps {
	product: IProduct
}

export const ProductBody: FC<IProps> = ({ product }) => {

	return (
		<Flex
			h="full"
			direction="column"
			justifyContent="space-between"
		>
			<Box mb={3}>
				<Heading
					className={styles.title}
					fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					mb={1}
					textAlign="center"
				>
					{product.title}
				</Heading>
				<Flex
					direction={{ base: 'column', md: 'column' }}
					justifyContent="space-between"
					alignItems="center"
				>
					<ProductRating
						rating={product.rating.rate}
					/>
					<ProductPrice
						price={product.price}
					/>
				</Flex>
			</Box>

			<Flex
				justifyContent="space-between"
				alignItems="center"
			>
				<Button
					width="full"
					maxW="52"
					ml="auto"
					mr="auto"
					color="black.300"
					bg={useColorModeValue('green.100', 'green.700')}
					_hover={{
						bg: useColorModeValue('green.200', 'green.600'),
					}}
				>
					Add to cart
				</Button>
			</Flex>
		</Flex>
	)
}
