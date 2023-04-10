import Image from 'next/image'
import classNames from 'classnames'
import { BsCart, BsTrash, BsXLg } from 'react-icons/bs'
import { data } from 'src/data/data'

import { Button } from '@components/Button'

import { useOutside } from '@hooks'

import styles from './cart-dropdown.module.scss'

export const CartDropdown = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

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
					{data.length
						?
						<>
							{data.map((product: any) => (
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
											<div className={styles.dropdownTitle}>
												{product.title}
											</div>
											<div className={styles.dropdownPrice}>
												${product.price}
											</div>
										</div>
									</div>
									<button className={styles.dropdownButton}>
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
