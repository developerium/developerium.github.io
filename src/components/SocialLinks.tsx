import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import { StyledLink } from './StyledLink'

interface SocialLinksProps {
  a?: string
}

export const SocialLinks: FC<SocialLinksProps> = () => (
  <Grid container flexDirection="column">
    <StyledLink href="mailto:vahid@kheradmand.de" title="Email Vahid">
      email
    </StyledLink>

    <StyledLink
      href="https://www.linkedin.com/in/developerium/"
      title="Vahid's LinkedIn profile link"
    >
      linkedin
    </StyledLink>

    <StyledLink
      href="https://github.com/developerium/"
      title="Vahid's Github profile link"
    >
      github
    </StyledLink>
  </Grid>
)
