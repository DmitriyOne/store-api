import { ForwardedRef, forwardRef, InputHTMLAttributes, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { FormControl, FormLabel, IconButton, Input as InputChakraUi, InputGroup, InputProps, InputRightElement, useDisclosure, useMergeRefs } from '@chakra-ui/react'

import { inputStyles, labelStyles } from './input.styles'

interface IProps extends InputProps {
	label: string
	type: InputHTMLAttributes<HTMLInputElement>['type']
}

export const Input = forwardRef(({
	label,
	type,
	...props
}: IProps, ref: ForwardedRef<HTMLInputElement>
) => {
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
		<FormControl>
			<FormLabel
				htmlFor={label}
				{...labelStyles}
			>
				{label}
			</FormLabel>
			{type === 'password'
				?
				<InputGroup>
					<InputRightElement>
						<IconButton
							variant="link"
							aria-label={isOpen ? 'Mask password' : 'Reveal password'}
							icon={isOpen ? <HiEyeOff /> : <HiEye />}
							onClick={onClickReveal}
						/>
					</InputRightElement>
					<InputChakraUi
						id={label}
						ref={mergeRef}
						name={label}
						type={isOpen ? 'text' : 'password'}
						autoComplete="current-password"
						{...props}
					/>
				</InputGroup>
				:
				<InputChakraUi
					id={label}
					type={type}
					{...props}
					{...inputStyles}
				/>
			}
		</FormControl>
	)
}
)

Input.displayName = 'Input'
