/* eslint-disable no-unused-vars */
import { NextPage } from 'next'

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

export default ShopPage
