import { createTheme } from '@mui/material'

// NOTE : app's black background is set in index.html file for better ux (not flickering)
export const whiteColor = '#fff'
export const greenColor = '#22e88f'
export const purpleColor = '#7636ff'
export const pinkColor = '#f5f'

export const baseFontSize = 20

export const appTheme = createTheme({
  typography: {
    fontFamily: 'JetBrains Mono',
    fontSize: baseFontSize,
  },
})
