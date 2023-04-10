import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { BsCart, BsTrash, BsXLg } from 'react-icons/bs'

import { Button } from '@components/Button'

import { STORE_ROUTES } from '@constants'

import { useAppActions, useAppSelector, useOutside } from '@hooks'

import styles from './cart-dropdown.module.scss'

export const CartDropdown = () => {
	const { ref, isShow, setIsShow } = useOutside(false)
	const { cart } = useAppSelector(state => state)
	const { removeItem } = useAppActions()

	return (
		<>
			<Button
				className={styles.button}
				onClick={() => setIsShow(!isShow)}
			>
				{isShow ? <BsXLg /> : <BsCart />}
			</Button>

			{isShow &&
				<div
					className={classNames(styles.dropdown, 'anim-cart')}
					ref={ref}
				>
					{cart.length
						?
						<>
							{cart.map((product) => (
								<div
									key={product.id}
									className={styles.dropdownItem}
								>
									<div className={styles.dropdownWrapper}>
										<div className={styles.dropdownImageWrapper}>
											<Image
												className={styles.dropdownImage}
												src={product.image}
												alt={product.title}
												fill
												sizes="auto"
											/>
										</div>
										<div className={styles.dropdownBody}>
											<Link
												href={`${STORE_ROUTES.PRODUCT}/${product.id}`}
												className={styles.dropdownTitle}
												onClick={() => setIsShow(false)}
											>
												{product.title}
											</Link>
											<div className={styles.dropdownPrice}>
												${product.price}
											</div>
										</div>
									</div>
									<button
										className={styles.dropdownButton}
										onClick={() => removeItem(product)}
									>
										<BsTrash />
									</button>
								</div>
							))}
						</>
						:
						<div>Cart is empty</div>
					}
				</div>
			}
		</>
	)
}
