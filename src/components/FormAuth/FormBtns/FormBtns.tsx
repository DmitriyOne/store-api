import { FC } from 'react'

import { Button, CircularProgress, Stack } from '@chakra-ui/react'

import { IFormBtns } from '@interfaces'

import { Divider } from '@components'

import { AuthButtonGroup } from '../AuthButtonGroup'

import { btnStyles, componentStyles } from './form-btns.styles'

export const FormBtns: FC<IFormBtns> = ({ btnText, variant, isLoading }) => {

	return (
		<Stack {...componentStyles}>
			<Button
				type="submit"
				{...btnStyles}
				isDisabled={isLoading}
			>
				{isLoading
					?
					<CircularProgress
						isIndeterminate
						size="24px"
						color="teal"
					/>
					:
					<>{btnText}</>
				}
			</Button>

			{variant !== 'forgot' && <>
				<Divider text="or continue with" />
				<AuthButtonGroup />
			</>
			}
		</Stack>
	)
}
