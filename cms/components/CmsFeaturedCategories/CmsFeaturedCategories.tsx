import * as React from 'react'

import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material'
import { useRouter } from 'next/router'

import { KiboImage, Title } from '@/components/common'

export interface featuredCategoryProps {
  imgSource: any
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
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    minHeight: '350px',
    opacity: '0.99',
    padding: 0,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    '&:last-child': {
      paddingBottom: 0,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
      '.cardButton': {
        backgroundColor: '#0050d9',
      },
    },
  },
  nameStyle: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 600,
    color: 'common.white',
  },
  buttonStyle: {
    fontSize: '14px',
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255, 0.4)',
    minWidth: '120px',
    background: 'transparent',
    textAlign: 'center',
    margin: '1rem auto 0',
  },
}

const FeaturedCategory = (props: featuredCategoryProps) => {
  const { imgSource, title, buttonTitle, buttonUrl } = props
  const router = useRouter()
  return (
    <Card
      sx={styles.contentStyle}
      onClick={() => {
        router.push(buttonUrl)
      }}
    >
      <CardMedia sx={styles.cardMediaStyle}>
        <KiboImage
          src={imgSource}
          alt={imgSource ? 'abc' : 'product-image-alt'}
          layout="fill"
          objectFit="cover"
          data-testid="featured-category-image"
        />

        <CardContent sx={styles.cardStyle}>
          <Typography variant="h2" sx={styles.nameStyle}>
            {title}
          </Typography>
          <Button variant="contained" className="cardButton" sx={{ ...styles.buttonStyle }}>
            {buttonTitle}
          </Button>
        </CardContent>
      </CardMedia>
    </Card>
  )
}
const CmsFeaturedCategories = ({ featuredCategories, title }: featuredCategoriesProps) => {
  return (
    <Container maxWidth={'xl'} sx={{ display: 'flex', flexDirection: 'column' }}>
      {featuredCategories && (
        <>
          {title && <Title title={title} />}
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {featuredCategories?.map((category: featuredCategoryProps, index) => (
                <Grid key={index} item xs={12} sm={12} md={6} lg={3}>
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
