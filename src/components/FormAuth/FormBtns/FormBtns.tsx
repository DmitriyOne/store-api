import { FC } from 'react'

import { Button, Stack } from '@chakra-ui/react'

import { IForm, IFormBtns } from '@interfaces'

import { Divider } from '@components'

import { AuthButtonGroup } from '../AuthButtonGroup'

import { btnStyles, componentStyles } from './form-btns.styles'

interface IProps extends IFormBtns, IForm { }

export const FormBtns: FC<IProps> = ({ btnText, variant }) => {

	return (
		<Stack {...componentStyles}>
			<Button type="submit" {...btnStyles}>
				{btnText}
			</Button>

			{variant !== 'forgot' && <>
				<Divider text="or continue with" />
				<AuthButtonGroup />
			</>
			}
		</Stack>
	)
}
