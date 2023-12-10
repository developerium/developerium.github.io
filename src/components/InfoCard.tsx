import React, { FC } from 'react'
import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { purpleColor, whiteColor } from '../config/theme-config'

interface InfoCardProps {
  title: string
  description: string
  image: string
}

const rootStyle: CardProps['sx'] = {
  maxWidth: 345,
  backgroundColor: purpleColor,
  border: 0,
  borderRadius: 0,
}

export const InfoCard: FC<InfoCardProps> = ({ title, description, image }) => (
  <Card sx={rootStyle}>
    <CardActionArea>
      <CardMedia component="img" height="400" image={image} alt={title} />

      <CardContent>
        <Typography
          gutterBottom
          variant="h1"
          component="div"
          color={whiteColor}
          fontSize="50px"
        >
          {title}
        </Typography>

        <Typography variant="body2" color={whiteColor}>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)
