import React from 'react'

import {
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  useTheme,
  CardMedia,
  Box,
  Grid,
} from '@mui/material'
import Icon from '@mui/material/Icon'
import Link from 'next/link'

import { KiboImage } from '@/components/common'

const styles = {
  contentStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    justifyContent: 'center',
    flexDirection: 'column',
    opacity: '0.99',
    maxWidth: '1024px',
    padding: '70px 0 80px',
    ':last-child': {
      paddingBottom: '80px',
    },
  },
  nameStyle: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 600,
    color: 'common.white',
    margin: '0 0 0.8rem',
    lineHeight: '1.54',
  },
  subTitleStyle: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 500,
    color: 'common.white',
  },
  footerContanier: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  iconStyle: {
    color: '#fff',
    display: 'block',
    fontSize: '5rem !important',
    padding: '1.6rem 0',
    textAlign: 'center',
    margin: 'auto',
    height: 'auto',
  },
}

const CmsVehicleInnovation = ({ vehicleInnovationProps }: any) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('sm'))

  const { title, subtitle, backgroundImageUrl, footerChildrens } = vehicleInnovationProps || {}
  return (
    <>
      {vehicleInnovationProps && (
        <Card sx={styles.contentStyle}>
          <CardMedia sx={styles.cardMediaStyle}>
            <KiboImage
              src={backgroundImageUrl}
              alt={backgroundImageUrl ? 'abc' : 'product-image-alt'}
              layout="fill"
              objectFit="cover"
              data-testid="product-image"
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardContent sx={styles.cardStyle}>
                <Typography variant="h2" sx={styles.nameStyle} style={{ fontSize: '2rem' }}>
                  {title}
                </Typography>
                {!mobileView && (
                  <Box sx={styles.footerContanier}>
                    <Typography
                      align="center"
                      variant="h1"
                      sx={styles.subTitleStyle}
                      style={{ fontSize: '20px' }}
                    >
                      {subtitle}
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      {footerChildrens?.map(({ icon, info }: any) => {
                        return (
                          <Grid item xs={4} key={info}>
                            <Icon sx={styles.iconStyle}>{icon}</Icon>
                            <Typography
                              variant="subtitle2"
                              component="span"
                              sx={{ color: 'common.white', display: 'flex', textAlign: 'center' }}
                            >
                              {info}
                            </Typography>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Box>
                )}
                {mobileView && (
                  <Box sx={styles.footerContanier}>
                    <Link href="/" passHref>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ color: 'common.white', textDecoration: 'underline' }}
                      >
                        Learn more about us
                      </Typography>
                    </Link>
                  </Box>
                )}
              </CardContent>
            </Box>
          </CardMedia>
        </Card>
      )}
    </>
  )
}

export default CmsVehicleInnovation
