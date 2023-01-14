import * as React from 'react'

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  styled,
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { KiboImage, Title } from '@/components/common'

export interface featuredCategoryProps {
  imgSource: string
  title: string
  buttonTitle: string
  buttonUrl: string
}

export interface featuredCategoriesProps {
  title?: string
  featuredCategories: featuredCategoryProps[]
}

const styles = {
  contentStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
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

const FeaturedCategory = (props: featuredCategoryProps) => {
  const { imgSource, title, buttonTitle, buttonUrl } = props
  const router = useRouter()
  return (
    <Card sx={styles.contentStyle}>
      <CardMedia sx={styles.cardMediaStyle}>
        <KiboImage
          src={imgSource}
          alt={imgSource ? 'abc' : 'product-image-alt'}
          layout="fill"
          objectFit="cover"
          data-testid="featured-category-image"
        />

        <CardContent sx={styles.cardStyle}>
          <Typography variant="h2" sx={styles.nameStyle} style={{ fontSize: '3.6rem' }}>
            {title}
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
  )
}
const CmsFeaturedCategories = ({ featuredCategories, title }: featuredCategoriesProps) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('md'))

  return (
    <Container maxWidth={'xl'} sx={{ display: 'flex', flexDirection: 'column' }}>
      {featuredCategories && (
        <>
          {title && <Title title={title} />}
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 4, md: 4 }}>
              {featuredCategories?.map((category: featuredCategoryProps, index) => (
                <Grid key={index} item xs={mobileView ? 12 : 3}>
                  <FeaturedCategory
                    imgSource={category.imgSource}
                    title={category.title}
                    buttonTitle={category.buttonTitle}
                    buttonUrl={category.buttonUrl}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </Container>
  )
}

export default CmsFeaturedCategories
