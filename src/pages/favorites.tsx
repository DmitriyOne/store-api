import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { Favorites } from '@screens'

export const FavoritesPage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic pageTitle="Favorites" />
			<Favorites />
		</>
	)
}

export default FavoritesPage
