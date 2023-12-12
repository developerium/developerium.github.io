import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import List from '@mui/material/List'
import InboxIcon from '@mui/icons-material/Inbox'

import { pinkColor } from '../config/theme-config'
import { SurpriseButton } from './SurpriseButton'

const rootStyle: BoxProps['sx'] = { backgroundColor: pinkColor }

export const SurpriseButtonList: FC = () => {
  const handler = () => {
    console.log('yooo')
  }

  return (
    <Box sx={rootStyle}>
      <nav aria-label="list of surprising buttons">
        <List>
          <SurpriseButton
            title={'First'}
            onClick={handler}
            icon={<InboxIcon />}
          />
          <SurpriseButton
            title={'Second'}
            onClick={handler}
            icon={<InboxIcon />}
          />
          <SurpriseButton
            title={'Third'}
            onClick={handler}
            icon={<InboxIcon />}
          />
        </List>
      </nav>
    </Box>
  )
}
