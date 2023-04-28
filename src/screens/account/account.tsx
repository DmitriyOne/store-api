import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuth } from '@hooks'

import { Heading } from '@components'

export const Account = () => {
	const router = useRouter()
	const { id } = router.query
	const { user } = useAuth()

	return (
		<>
			<Heading size="xl">
				Account page
			</Heading>
			<div>
				<h1>Welcome, {user.name}</h1>
				<ul>
					<li>
						<Link href={`/account/${id}/settings`}>
							Settings account
						</Link>
					</li>
					<li>
						<Link href={`/account/${id}/my-orders`}>
							My orders
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
