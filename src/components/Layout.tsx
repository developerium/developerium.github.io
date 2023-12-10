import React, { FC, ReactNode } from 'react'
import Grid from '@mui/material/Grid'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Grid container alignContent="center" flexDirection="column" paddingY={2}>
    <Grid item>{children} </Grid>
  </Grid>
)
