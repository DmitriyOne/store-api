import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import { STORE_LINKS } from '@constants/links'

import { ISocial } from '@interfaces'

export const socialItem: ISocial[] = [
	{
		label: 'Twitter',
		href: STORE_LINKS.twitter,
		icon: <FaTwitter />,
	},
	{
		label: 'YouTube',
		href: STORE_LINKS.youtube,
		icon: <FaYoutube />,
	},
	{
		label: 'Instagram',
		href: STORE_LINKS.instagram,
		icon: <FaInstagram />,
	},
]
