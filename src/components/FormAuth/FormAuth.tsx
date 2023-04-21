import { FC } from 'react'

import { Container, Stack } from '@chakra-ui/react'

import { IForm, IFormBtns, IFormHeader } from '@interfaces'

import { FormBody } from './FormBody'
import { FormHeader } from './FormHeader'

import { componentStyles, containerStyles } from './form.styles'

interface IProps extends IForm, IFormBtns {
	header: IFormHeader
}

export const FormAuth: FC<IProps> = ({ variant, header, btnText }) => {

	return (
		<Container {...componentStyles}>
			<Stack {...containerStyles}>
				<FormHeader {...header} />
				<FormBody
					variant={variant}
					btnText={btnText}
				/>
			</Stack>
		</Container>
	)
}
