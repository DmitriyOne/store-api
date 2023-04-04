import { useEffect, useState } from 'react'

interface IWindowSize {
	width?: number;
	height?: number;
}

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<IWindowSize>({
		width: undefined,
		height: undefined,
	})

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const isMobile = windowSize.width ? windowSize.width <= 768 : undefined
	const isDesktop = windowSize.width ? windowSize.width > 1024 : undefined

	return { ...windowSize, isMobile, isDesktop }
}
