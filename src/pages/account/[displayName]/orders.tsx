import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { MyOrders } from '@screens'

export const OrdersPage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic pageTitle="Orders" />
			<MyOrders />
		</>
	)
}

export default OrdersPage
