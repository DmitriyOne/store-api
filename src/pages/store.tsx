import { NextPage } from 'next'

import { useAppSelector } from '@hooks'

import { Store } from '@screens'

export const StorePage: NextPage = () => {
	const { cart } = useAppSelector(state => state)
	console.log('cart: ', cart)

	return (
		<Store />
	)
}

export default StorePage
