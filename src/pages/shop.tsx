/* eslint-disable no-unused-vars */
import { GetServerSideProps, NextPage } from 'next'
import { SWRConfig } from 'swr'

import { API } from '@constants'
import { IProduct } from '@interfaces'

import { axiosFetcher } from '@helpers'

import { HeadTitleDynamic } from '@components'

import { Shop } from '@screens'

export interface IProps {
	fallback: IProduct[]
}

export const ShopPage: NextPage<IProps> = ({ fallback }) => {

	return (
		<SWRConfig value={{ fallback }}>
			<HeadTitleDynamic />
			<Shop />
		</SWRConfig>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data: IProduct[] = await axiosFetcher(API.PRODUCTS.ALL)

	return {
		props: {
			fallback: {
				[API.PRODUCTS.ALL]: data,
			},
		},
	}
}

export default ShopPage
