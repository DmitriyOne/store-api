import { FC, useContext, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { AlertContext } from 'src/context'

import { Alert as ChakraAlert, AlertIcon } from '@chakra-ui/react'

import { componentStyles } from './alert.styles'

interface IProps {
	message: string
}

export const Alert: FC<IProps> = ({ message }) => {
	const { status, visible } = useContext(AlertContext)
	const ref = useRef(null)

	return (
		<CSSTransition
			in={visible}
			timeout={{
				enter: 350,
				exit: 200,
			}}
			classNames="alert"
			mountOnEnter
			unmountOnExit
			nodeRef={ref}
		>
			<ChakraAlert ref={ref} status={status} {...componentStyles}>
				<AlertIcon />
				{message}
			</ChakraAlert>
		</CSSTransition>
	)
}
