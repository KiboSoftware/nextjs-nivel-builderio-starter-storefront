import React from 'react'

import { Grid } from '@mui/material'
import { useTranslation } from 'next-i18next'
import getConfig from 'next/config'
import Carousel from 'react-elastic-carousel'

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

  return (
    <>
      {productCodes?.length > 0 && (
        <Grid item xs={12} sx={{ p: { xs: 1, md: 5 }, marginY: 2 }}>
          <Title title={title} />
          {/* <Carousel isRTL={false} breakPoints={breakPoints}>
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
                  rating={productGetters.getRating(product)}
                />
              )
            })}
          </Carousel> */}
        </Grid>
      )}
    </>
  )
}

export default ProductRecommendations
