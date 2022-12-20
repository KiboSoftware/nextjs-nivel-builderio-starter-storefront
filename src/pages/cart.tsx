import { BuilderComponent, builder, Builder } from '@builder.io/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getConfig from 'next/config'

import { SmallBanner } from '@/components/home'
import { CartTemplate } from '@/components/page-templates'
import { ProductRecommendations } from '@/components/product'
import { CategorySlider } from '@/components/product-listing'
import { getCart } from '@/lib/api/operations/'

import type { NextPage, GetServerSidePropsContext } from 'next'

const { publicRuntimeConfig } = getConfig()
const apiKey = publicRuntimeConfig?.builderIO?.apiKey

builder.init(apiKey)

Builder.registerComponent(SmallBanner, {
  name: 'SmallBanner',
  inputs: [
    {
      name: 'bannerProps',
      type: 'object',
      defaultValue: {
        title: 'Save up to 50% + Free Shipping',
        subtitle: 'Valid through 10/31.',
        callToAction: { title: 'Shop Now', url: '/category/deals' },
        backgroundColor: '#A12E87',
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subtitle',
          type: 'string',
        },
        {
          name: 'callToAction',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
        {
          name: 'backgroundColor',
          type: 'string',
        },
      ],
    },
  ],
})

Builder.registerComponent(ProductRecommendations, {
  name: 'ProductRecommendations',
  inputs: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'productCodes',
      type: 'KiboCommerceProductsList',
    },
  ],
})

Builder.registerComponent(CategorySlider, {
  name: 'CategorySlider',
  inputs: [
    {
      name: 'categoryCodes',
      type: 'KiboCommerceCategoriesList',
    },
  ],
})

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { locale, req, res } = context
  const response = await getCart(req, res)

  const bannerSection = await builder.get('cart-banner-section').promise()
  const cartProductAndCategorySection = await builder
    .get('cart-product-and-category-section')
    .promise()
  return {
    props: {
      bannerSection: bannerSection || null,
      cartProductAndCategorySection: cartProductAndCategorySection || null,
      cart: response?.currentCart,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

const CartPage: NextPage = (props: any) => {
  const { bannerSection, cartProductAndCategorySection } = props
  return (
    <>
      <CartTemplate
        {...props}
        banner={
          bannerSection && <BuilderComponent model="cart-banner-section" content={bannerSection} />
        }
        cartProductAndCategorySection={
          cartProductAndCategorySection && (
            <BuilderComponent
              model="cart-product-section"
              content={cartProductAndCategorySection}
            />
          )
        }
      />
    </>
  )
}

export default CartPage
