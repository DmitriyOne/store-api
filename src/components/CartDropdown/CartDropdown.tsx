import Image from 'next/image'
import { data } from 'src/data/data'

import { Button } from '@components/Button'
import { GeneratorSvg } from '@components/GeneratorSvg'

import { useOutside } from '@hooks'

export const CartDropdown = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const buttonIcon = isShow ? 'close' : 'cart'

	return (
		<>
			<Button
				className="bg-green-800 rounded-full text-white p-2 block w-10 z-50 relative"
				onClick={() => setIsShow(!isShow)}
			>
				<GeneratorSvg id={buttonIcon} />
			</Button>

			{isShow &&
				<div
					className="bg-white rounded-t-xl shadow-2xl fixed bottom-0 left-0 anim-cart z-10 py-7 px-5 w-full"
					style={{ minHeight: '45%' }}
					ref={ref}
				>
					{data.length ? (
						<>
							{data.map((product: any) => (
								<div
									key={`Cart item: ${product.id}`}
									className="flex items-center justify-between bg-green-100 rounded-lg p-4 mb-4"
								>
									<div className="w-3/4 flex items-center">
										<div className="mr-4 relative w-7 h-7">
											<Image
												src={product.image}
												alt={product.title}
												className="rounded-lg"
												fill
												sizes="auto"
											/>
										</div>
										<div className="text-sm mr-4 w-3/4 ">
											<div className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-green-900 mb-1">
												{product.title}
											</div>
											<div className="text-green-800">${product.price}</div>
										</div>
									</div>
									<button className="w-4">
										<GeneratorSvg id="delete" />
									</button>
								</div>
							))}
						</>
					) : (
						<div>Cart is empty</div>
					)}
				</div>
			}
		</>
	)
}
