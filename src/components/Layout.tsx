import React, { FC, ReactNode } from 'react'
import Grid from '@mui/material/Grid'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Grid
    container
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}
  >
    <Grid>{children}</Grid>
  </Grid>
)
