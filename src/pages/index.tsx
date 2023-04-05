import { NextPage } from 'next'

import { CartDropdown } from '@components'

export const HomePage: NextPage = () => {

	return (
		<>
			<h1>Home page</h1>
			<CartDropdown />
		</>
	)
}

export default HomePage
