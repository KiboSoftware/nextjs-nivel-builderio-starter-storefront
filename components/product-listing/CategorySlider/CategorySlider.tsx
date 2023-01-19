import React, { forwardRef, ReactNode } from 'react'

import getConfig from 'next/config'
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel'

import { ProductCard } from '@/components/product'
import { useCategorySearchQueries } from '@/hooks'
import { categorySearchGetters, productGetters } from '@/lib/getters'
import { uiHelpers } from '@/lib/helpers'

export interface CategorySliderProps {
  categoryCodes: Array<string>
}

const CategorySlider = (props: CategorySliderProps) => {
  const { categoryCodes } = props
  const { publicRuntimeConfig } = getConfig()
  const { getCategoryLink } = uiHelpers()
  const { data: categorySearchResult } = useCategorySearchQueries(categoryCodes)
  const categories = categorySearchResult?.items || []
  const breakPoints = publicRuntimeConfig?.builderIO?.breakPoints

  /* eslint-disable react/display-name */
  const CustomCarousel = forwardRef<any, ReactElasticCarouselProps & { children: ReactNode[] }>(
    (props, ref) => <Carousel ref={ref} {...props} />
  )

  return (
    <>
      {categories?.length > 0 && (
        <CustomCarousel isRTL={false} breakPoints={breakPoints}>
          {categories &&
            categories?.map((category: any) => {
              return (
                <ProductCard
                  key={category?.categoryCode}
                  imageUrl={productGetters.handleProtocolRelativeUrl(
                    categorySearchGetters.getCoverImage(category)
                  )}
                  link={getCategoryLink(category?.categoryCode as string)}
                  title={categorySearchGetters.getName(category) as string}
                  isShowWishlistIcon={false}
                  showProuductRating={false}
                />
              )
            })}
        </CustomCarousel>
      )}
    </>
  )
}

export default CategorySlider
