import { NextPage } from 'next'

import { useAppSelector } from '@hooks'

import { HeadTitleDynamic } from '@components'

import { Shop } from '@screens'

export const ShopPage: NextPage = () => {
	const { cart } = useAppSelector(state => state)
	// console.log('cart: ', cart)

	return (
		<>
			<HeadTitleDynamic />
			<Shop />
		</>
	)
}

export default ShopPage
