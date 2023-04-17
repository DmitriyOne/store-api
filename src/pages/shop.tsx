import { NextPage } from 'next'

import { IProduct } from '@interfaces'

import { useAppSelector } from '@hooks'
import { wrapper } from '@services'
import { getAllProducts, getRQTProduct } from '@services/product'

import { HeadTitleDynamic } from '@components'

import { Shop } from '@screens'

export const ShopPage: NextPage = () => {
	const { cart } = useAppSelector(state => state)
	// console.log('cart: ', cart)

	// console.log('data page: ', products)

	return (
		<>
			<HeadTitleDynamic />
			<Shop />
		</>
	)
}

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async (context) => {

		store.dispatch(getAllProducts.initiate())
		const data = await Promise.all(store.dispatch(getRQTProduct()))

		return {
			props: {
				products: data[0].data,
			},
		}
	}
)

export default ShopPage
