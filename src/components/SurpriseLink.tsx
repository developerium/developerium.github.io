import React, { FC } from 'react'

import Link, { LinkProps } from '@mui/material/Link'
import { greenColor, pinkColor } from '../config/theme-config'

const linkStyle: LinkProps['sx'] = {
  display: 'flex',
  alignItems: 'center',
  color: greenColor,
  ':hover': {
    backgroundColor: pinkColor,
  },
  padding: 2,
  fontSize: 20,
}

export const SurpriseLink: FC<LinkProps> = (props) => (
  <Link {...props} sx={linkStyle} underline="hover" target="_blank" />
)
