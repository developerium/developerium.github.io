import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { StyledLink } from './StyledLink'

const iconStyle = { marginRight: 2 }

export const SocialLinkList: FC = () => (
  <Grid container flexDirection="column">
    <StyledLink href="mailto:vahid@kheradmand.de" title="Email Vahid">
      <EmailIcon sx={iconStyle} />
      email
    </StyledLink>

    <StyledLink
      href="https://www.linkedin.com/in/developerium/"
      title="Vahid's LinkedIn profile link"
    >
      <LinkedInIcon sx={iconStyle} />
      linkedin
    </StyledLink>

    <StyledLink
      href="https://github.com/developerium/"
      title="Vahid's Github profile link"
    >
      <GitHubIcon sx={iconStyle} />
      github
    </StyledLink>
  </Grid>
)
