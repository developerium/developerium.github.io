import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import List from '@mui/material/List'
import CelebrationIcon from '@mui/icons-material/Celebration'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'

import { greenColor, pinkColor, purpleColor } from '../config/theme-config'
import { SurpriseButton } from './SurpriseButton'
import { useConfetti } from '../useConfetti'
import { SurpriseLink } from './SurpriseLink'
import { LinkProps } from '@mui/material/Link'

const rootStyle: BoxProps['sx'] = { backgroundColor: pinkColor }
const iconStyle = { marginRight: 2 }

export const SurpriseButtonList: FC = () => {
  const confettiButtonId = 'confetti-button'
  const { throwConfetti } = useConfetti({ targetId: confettiButtonId })

  return (
    <Box sx={rootStyle}>
      <nav aria-label="list of surprising buttons">
        <List>
          <SurpriseButton
            id={confettiButtonId}
            title="confetti"
            onClick={throwConfetti}
            icon={<CelebrationIcon />}
          />

          <SurpriseLink href="https://super-tic-tac-toe.developerium.com">
            <VideogameAssetIcon sx={iconStyle} />
            super tic tac toe
          </SurpriseLink>
        </List>
      </nav>
    </Box>
  )
}
