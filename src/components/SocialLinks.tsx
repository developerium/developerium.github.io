import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import { CustomLink } from './CustomLink'

interface SocialLinksProps {
  a?: string
}

export const SocialLinks: FC<SocialLinksProps> = () => (
  <Grid container flexDirection="column">
    <CustomLink href="mailto:vahid@kheradmand.de" title="Email Vahid">
      email
    </CustomLink>

    <CustomLink
      href="https://www.linkedin.com/in/developerium/"
      title="Vahid's LinkedIn profile link"
    >
      linkedin
    </CustomLink>

    <CustomLink
      href="https://github.com/developerium/"
      title="Vahid's Github profile link"
    >
      github
    </CustomLink>
  </Grid>
)
