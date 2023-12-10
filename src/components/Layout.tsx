import React, { FC, ReactNode } from 'react'
import Grid from '@mui/material/Grid'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Grid
    container
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    paddingY={2}
    minHeight="100vh"
  >
    <Grid item>{children}</Grid>
  </Grid>
)
