import React, { forwardRef, ReactNode } from 'react'

import { Grid } from '@mui/material'
import getConfig from 'next/config'
import { useTranslation } from 'next-i18next'
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel'

import { Title } from '@/components/common'
import { ProductCard } from '@/components/product'
import { useProductsQueries } from '@/hooks'
import { productGetters } from '@/lib/getters'
import { uiHelpers } from '@/lib/helpers'

import type { Product } from '@/lib/gql/types'

export interface ProductRecommendationsProps {
  title: string
  productCodes: Array<string>
}

const ProductRecommendations = (props: ProductRecommendationsProps) => {
  const { title, productCodes } = props
  const { publicRuntimeConfig } = getConfig()
  const { t } = useTranslation('common')
  const { getProductLink } = uiHelpers()
  const { data: productSearchResult } = useProductsQueries(productCodes)
  const products = productSearchResult?.items as Product[]
  const breakPoints = publicRuntimeConfig?.builderIO?.breakPoints

  /* eslint-disable react/display-name */
  const CustomCarousel = forwardRef<any, ReactElasticCarouselProps & { children: ReactNode[] }>(
    (props, ref) => <Carousel ref={ref} {...props} />
  )

  return (
    <>
      {productCodes?.length > 0 && (
        <Grid item xs={12} sx={{ p: { xs: 1, md: 5 }, marginY: 2 }}>
          <Title title={title} />
          <CustomCarousel isRTL={false} breakPoints={breakPoints}>
            {products?.map((product) => {
              return (
                <ProductCard
                  key={product?.productCode}
                  imageUrl={
                    productGetters.getCoverImage(product) &&
                    productGetters.handleProtocolRelativeUrl(productGetters.getCoverImage(product))
                  }
                  link={getProductLink(product?.productCode as string)}
                  price={t<string>('currency', {
                    val: productGetters.getPrice(product).regular,
                  })}
                  {...(productGetters.getPrice(product).special && {
                    salePrice: t<string>('currency', {
                      val: productGetters.getPrice(product).special,
                    }),
                  })}
                  title={productGetters.getName(product) as string}
                  isShowWishlistIcon={false}
                  showProuductRating={false}
                />
              )
            })}
          </CustomCarousel>
        </Grid>
      )}
    </>
  )
}

export default ProductRecommendations
