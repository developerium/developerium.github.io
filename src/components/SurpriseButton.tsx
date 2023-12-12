import React, { FC, ReactElement } from 'react'
import { baseFontSize, whiteColor } from '../config/theme-config'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem, { ListItemProps } from '@mui/material/ListItem'

interface SurpriseButtonProps {
  title: string
  onClick: ListItemProps['onClick']
  icon: ReactElement
}

const listStyle = { color: whiteColor }
const iconStyle = { color: whiteColor }
const textStyle = { fontSize: baseFontSize }

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
