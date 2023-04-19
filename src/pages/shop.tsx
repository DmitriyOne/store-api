/* eslint-disable no-unused-vars */
import { NextPage } from 'next'

import { wrapper } from '@services'
import { getAllProducts, getRQTProduct, productApi } from '@services/product'

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
		
		store.dispatch(getAllProducts.initiate())
		await Promise.all(store.dispatch(getRQTProduct()))

		return {
			props: {},
		}
	}
)

export default ShopPage
