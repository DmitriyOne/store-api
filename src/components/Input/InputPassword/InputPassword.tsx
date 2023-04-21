import { ForwardedRef, forwardRef, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { IconButton, Input, InputGroup, InputProps, InputRightElement, useDisclosure, useMergeRefs } from '@chakra-ui/react'

export const InputPassword = forwardRef((
	{ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	const { isOpen, onToggle } = useDisclosure()
	const inputRef = useRef<HTMLInputElement>(null)

	const mergeRef = useMergeRefs(inputRef, ref)

	const onClickReveal = () => {
		onToggle()
		if (inputRef.current) {
			inputRef.current.focus({ preventScroll: true })
		}
	}

	return (
		<InputGroup>
			<InputRightElement>
				<IconButton
					variant="link"
					aria-label={isOpen ? 'Mask password' : 'Reveal password'}
					icon={isOpen ? <HiEyeOff /> : <HiEye />}
					onClick={onClickReveal}
				/>
			</InputRightElement>
			<Input
				id="password"
				ref={mergeRef}
				name="password"
				type={isOpen ? 'text' : 'password'}
				autoComplete="current-password"
				{...props}
			/>
		</InputGroup>
	)
})

InputPassword.displayName = 'InputPassword'
