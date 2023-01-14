import React from 'react'

import {
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  useTheme,
  Theme,
  styled,
  CardMedia,
  Button,
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { KiboImage } from '@/components/common'

const styles = {
  contentStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '600px',
    width: '100%',
    margin: '0px',
    padding: '0px',
    outline: 'none',
    borderRadius: '0px',
  },
  cardMediaStyle: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'end', md: 'center' },
  },
  cardStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    opacity: '0.99',
    alignItems: 'flex-start',
    width: { xs: '80%', md: '50%' },
    gap: 2,
  },
  nameStyle: {
    width: '100%',
    textAlign: 'left',
    fontWeight: 600,
    color: 'common.white',
  },
  subTitleStyle: {
    width: '100%',
    textAlign: 'left',
    fontWeight: 800,
    color: 'common.white',
  },
  buttonStyle: {
    fontSize: '1rem',
    backgroundColor: '#0050D9',
    borderColor: '#0050D9',
    minWidth: '180px',
  },
}

const LargeBanner = ({ bannerProps }: any) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('sm'))

  const { title, subtitle1, subtitle2, buttonTitle, buttonUrl, backgroundImageUrl } =
    bannerProps || {}
  const router = useRouter()

  return (
    <>
      {bannerProps && (
        <Card sx={styles.contentStyle}>
          <CardMedia sx={styles.cardMediaStyle}>
            <KiboImage
              src={backgroundImageUrl}
              alt={backgroundImageUrl ? 'abc' : 'product-image-alt'}
              layout="fill"
              objectFit="cover"
              data-testid="product-image"
            />

            <CardContent sx={styles.cardStyle}>
              <Typography variant="h2" sx={styles.nameStyle} style={{ fontSize: '3.6rem' }}>
                {title}
              </Typography>
              <Typography variant="h1" sx={styles.subTitleStyle} style={{ fontSize: '60px' }}>
                {subtitle1}
              </Typography>
              <Typography
                style={{ fontSize: mobileView ? '0.75rem' : '120px' }}
                sx={styles.subTitleStyle}
              >
                {subtitle2}
              </Typography>

              <Button
                variant="contained"
                sx={styles.buttonStyle}
                onClick={() => {
                  router.push(buttonUrl)
                }}
              >
                {buttonTitle}
              </Button>
            </CardContent>
          </CardMedia>
        </Card>
      )}
    </>
  )
}

export default LargeBanner
