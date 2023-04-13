import Link from 'next/link'
import { useRouter } from 'next/router'

import { Heading } from '@components'

export const Account = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<>
			<Heading size="xl">
				Account page
			</Heading>
			<div>
				<h1>Профиль пользователя {id}</h1>
				<ul>
					<li>
						<Link href={`/account/${id}/settings`}>
							Настройки профиля
						</Link>
					</li>
					<li>
						<Link href={`/account/${id}/my-orders`}>
							Мои заказы
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
