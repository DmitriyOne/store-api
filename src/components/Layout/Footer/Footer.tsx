import { CSSProperties } from 'react'

import { Layout } from 'antd'

import styles from './footer.module.scss'

const { Footer: FooterANTD } = Layout

const footerStyle: CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#7dbcea',
}

export const Footer = () => {
	return (
		<FooterANTD style={footerStyle}>
			Footer
		</FooterANTD>
	)
}
