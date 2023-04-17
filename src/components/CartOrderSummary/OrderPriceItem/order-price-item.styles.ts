import { HeadingProps, IconProps, ListItemProps, TextProps } from '@chakra-ui/react'

export const componentStyles = {

}

export const titleStyles: HeadingProps = {
	fontSize: { base: 'sm', md: 'lg' },
	fontWeight: 'medium',
}

export const liStyles: ListItemProps = {
	display: 'flex',
	alignItems: 'center',
	mt: '4px',
}

export const liIconStyles: IconProps = {
	w: { base: 3, md: 4 },
	h: { base: 3, md: 4 },
	color: 'green.400',
}

export const itemTitleWrapStyles: TextProps = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	pr: '10px',
	flex: { base: 2, md: 3, lg: 2 },
}

export const itemTitleStyles: TextProps = {
	fontSize: { base: 'xs', md: 'sm' },
	pr: '4px',
}

export const itemTitleQuantityStyles: TextProps = {
	display: 'flex',
	fontSize: { base: '2xs', md: 'xs' },
	whiteSpace: 'nowrap',
}

export const itemPriceStyles: TextProps = {
	display: 'flex',
	justifyContent: 'flex-end',
	flex: 1,
	fontSize: { base: 'xs', md: 'md' },
}
