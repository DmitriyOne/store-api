/* eslint-disable no-unused-vars */
import { FC } from 'react'

import { Container, Stack } from '@chakra-ui/react'

import { IForm } from '@interfaces'

import { FormBody } from './FormBody'
import { FormHeader } from './FormHeader'

import { componentStyles, containerStyles } from './form.styles'

export const FormAuth: FC<IForm> = (form) => {

	return (
		<Container {...componentStyles}>
			<Stack {...containerStyles}>
				<FormHeader {...form.header} />
				<FormBody
					variant={form.variant}
					btnText={form.btnText}
					onSubmit={form.onSubmit}
					handleSubmit={form.handleSubmit}
					errors={form.errors}
					control={form.control}
					isLoading={form.isLoading}
				/>
			</Stack>
		</Container>
	)
}
