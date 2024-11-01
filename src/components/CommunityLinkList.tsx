import React, { FC } from 'react'

import { StyledLink } from './StyledLink'
import GroupIcon from '@mui/icons-material/Group'
import Grid from '@mui/material/Grid'

const iconStyle = { marginRight: 2 }

export const CommunityLinkList: FC = () => (
  <Grid container flexDirection="column">
    <StyledLink
      href="https://www.skool.com/it-engineers-road-to-germany-6893"
      title="Community"
    >
      <GroupIcon sx={iconStyle} />
      Community
    </StyledLink>
  </Grid>
)
