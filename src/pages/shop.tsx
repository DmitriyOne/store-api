import { NextPage } from 'next'

import { useAppSelector } from '@hooks'

import { Shop } from '@screens'

export const ShopPage: NextPage = () => {
	const { cart } = useAppSelector(state => state)
	// console.log('cart: ', cart)

	return (
		<Shop />
	)
}

export default ShopPage
