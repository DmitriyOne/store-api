/* eslint-disable no-unused-vars */
import { NextPage } from 'next'

import { wrapper } from '@services'
import { getAllProducts, getRQTProduct } from '@services/product'

import { HeadTitleDynamic } from '@components'

import { Shop } from '@screens'

export const ShopPage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic />
			<Shop />
		</>
	)
}

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async (context) => {

		await Promise.all(store.dispatch(getRQTProduct()))
		store.dispatch(getAllProducts.initiate())

		return {
			props: {},
		}
	}
)

export default ShopPage
