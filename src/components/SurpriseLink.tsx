import React, { FC } from 'react'

import Link, { LinkProps } from '@mui/material/Link'
import { purpleColor, whiteColor } from '../config/theme-config'

const linkStyle: LinkProps['sx'] = {
  display: 'flex',
  alignItems: 'center',
  color: whiteColor,
  ':hover': {
    backgroundColor: purpleColor,
  },
  padding: 2,
  fontSize: 20,
}

export const SurpriseLink: FC<LinkProps> = (props) => (
  <Link {...props} sx={linkStyle} underline="hover" target="_blank" />
)
