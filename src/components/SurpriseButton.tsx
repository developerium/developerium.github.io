import React, { FC, ReactElement } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon'
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText'
import ListItem, { ListItemProps } from '@mui/material/ListItem'

import { baseFontSize, purpleColor, whiteColor } from '../config/theme-config'

interface SurpriseButtonProps {
  title: string
  onClick: ListItemProps['onClick']
  icon: ReactElement
}

const listStyle: ListItemProps['sx'] = {
  color: whiteColor,
  ':hover': {
    backgroundColor: purpleColor,
  },
}
const iconStyle: ListItemIconProps['sx'] = { color: whiteColor }
const textStyle: ListItemTextProps['primaryTypographyProps'] = {
  fontSize: baseFontSize,
}

export const SurpriseButton: FC<SurpriseButtonProps> = ({
  title,
  onClick,
  icon,
}) => {
  return (
    <ListItem disablePadding sx={listStyle} onClick={onClick}>
      <ListItemButton>
        <ListItemIcon sx={iconStyle}>{icon}</ListItemIcon>
        <ListItemText primary={title} primaryTypographyProps={textStyle} />
      </ListItemButton>
    </ListItem>
  )
}
