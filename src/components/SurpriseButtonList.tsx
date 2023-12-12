import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import List from '@mui/material/List'
import CelebrationIcon from '@mui/icons-material/Celebration'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'

import { pinkColor } from '../config/theme-config'
import { SurpriseButton } from './SurpriseButton'
import { useConfetti } from '../useConfetti'

const rootStyle: BoxProps['sx'] = { backgroundColor: pinkColor }

export const SurpriseButtonList: FC = () => {
  const confettiButtonId = 'confetti-button'
  const { throwConfetti } = useConfetti({ targetId: confettiButtonId })

  const handler = () => {
    console.log('yooo')
  }

  return (
    <Box sx={rootStyle}>
      <nav aria-label="list of surprising buttons">
        <List>
          <SurpriseButton
            id={confettiButtonId}
            title="Confetti"
            onClick={throwConfetti}
            icon={<CelebrationIcon />}
          />
          <SurpriseButton
            title="Launch it!"
            onClick={handler}
            icon={<RocketLaunchIcon />}
          />
          <SurpriseButton
            title="Tic Tac Toe"
            onClick={handler}
            icon={<VideogameAssetIcon />}
          />
        </List>
      </nav>
    </Box>
  )
}
