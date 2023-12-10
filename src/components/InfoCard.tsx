import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

interface InfoCardProps {
  title: string
  description: string
  image: string
}

const rootStyle = { maxWidth: 345 }

export const InfoCard: FC<InfoCardProps> = ({ title, description, image }) => (
  <Card sx={rootStyle}>
    <CardActionArea>
      <CardMedia component="img" height="400" image={image} alt={title} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>

    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>
)
