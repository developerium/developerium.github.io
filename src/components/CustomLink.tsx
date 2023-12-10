import React, { FC } from 'react'
import Link, { LinkProps } from '@mui/material/Link'
import { greenColor, pinkColor, purpleColor } from '../config/theme-config'

const linkStyle: LinkProps['sx'] = {
  color: greenColor,
  ':hover': {
    backgroundColor: purpleColor,
    color: pinkColor,
  },
  padding: 2,
  fontSize: 20,
}

export const CustomLink: FC<LinkProps> = ({ children, ...props }) => (
  <Link {...props} sx={linkStyle} underline="hover" target="_blank">
    {children}
  </Link>
)
