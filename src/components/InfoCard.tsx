import React, { FC, useMemo } from 'react'
import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { whiteColor } from '../config/theme-config'

interface InfoCardProps {
  title: string
  description: string
  bgColor: string
  image?: string
  containsHeader?: boolean
}

const baseCardStyle: CardProps['sx'] = {
  maxWidth: 345,
  border: 0,
  borderRadius: 0,
}

export const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  image,
  bgColor,
  containsHeader = false,
}) => {
  const cardStyle = useMemo(
    () => ({
      ...baseCardStyle,
      backgroundColor: bgColor,
    }),
    [bgColor]
  )

  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        {image && (
          <CardMedia component="img" height="400" image={image} alt={title} />
        )}

        <CardContent>
          <Typography
            gutterBottom
            variant={containsHeader ? 'h1' : 'h2'}
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
}
