import React from 'react'

import {
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  useTheme,
  CardMedia,
  Button,
  Box,
  Grid,
} from '@mui/material'
import { useRouter } from 'next/router'

import { KiboImage } from '@/components/common'
import Link from 'next/link'
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
// import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
// import LocalShippingIcon from '@mui/icons-material/LocalShipping'

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
    // alignItems: 'flex-start',
    // width: '100%',
    // backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0))',
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
  },
}

const CmsVehicleInnovation = ({ vehicleInnocationProps }: any) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('sm'))

  const { title, subtitle, backgroundImageUrl, footerChildrens } = vehicleInnocationProps || {}
  console.log(vehicleInnocationProps)

  return (
    <>
      {vehicleInnocationProps && (
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
                      {footerChildrens?.map((children: any) => {
                        // const Icon = children?.icon
                        const info = children?.info
                        return (
                          <Grid item xs={4} key={info}>
                            {/* <Icon sx={styles.iconStyle} /> */}
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
                      {/* <Grid item xs={4}>
                      <EmojiEventsIcon sx={styles.iconStyle} />
                      <Typography variant='subtitle2' component="span" sx={{ color: 'common.white', display: 'flex', textAlign: 'center' }}>
                        Our superior service sets us apart from the competition
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <HeadsetMicIcon sx={styles.iconStyle} />
                      <Typography variant='subtitle2' component="span" sx={{ color: 'common.white', display: 'flex', textAlign: 'center' }}>
                        With the largest technical and customer support staff in the industry, we
                        are here to help you, both before and after you place your order
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <LocalShippingIcon sx={styles.iconStyle} />
                      <Typography variant='subtitle2' component="span" sx={{ color: 'common.white', display: 'flex', textAlign: 'center' }}>
                        And we stock virtually everything we sell, ship 95% of our orders the same
                        day, and deliver in 2 days.
                      </Typography>
                    </Grid> */}
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
