import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { Cart } from '@screens'

export const CartPage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic pageTitle="Cart" />
			<Cart />
		</>
	)
}

export default CartPage
