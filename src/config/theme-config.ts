import { createTheme } from '@mui/material'

export const appTheme = createTheme({
  typography: {
    fontFamily: 'JetBrains Mono',
    fontSize: 20,
  },
})

// NOTE : app's black background is set in index.html file for better ux (not flickering)
export const purpleColor = '#7636ff'
export const whiteColor = '#fff'
