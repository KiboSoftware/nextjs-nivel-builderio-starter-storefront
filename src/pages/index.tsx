import { BuilderComponent, builder, Builder } from '@builder.io/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getConfig from 'next/config'

import CmsHomePageProducts from '../../cms/components/CmsHomePageProducts/CmsHomePageProducts'
import CmsFeaturedCategories from '@/cms/components/CmsFeaturedCategories/CmsFeaturedCategories'
import CmsVehicleInnovation from '@/cms/components/CmsVehicleInnovation/CmsVehicleInnovation'
import { Title } from '@/components/common'
import { KiboHeroCarousel, ContentTile, SmallBanner, LargeBanner } from '@/components/home'
import { FullWidthLayout } from '@/components/layout'
import { ProductRecommendations } from '@/components/product'
import { CategorySlider } from '@/components/product-listing'
import getCategoryTree from '@/lib/api/operations/get-category-tree'
import type { CategoryTreeResponse, NextPageWithLayout } from '@/lib/types'
import InnovationBackgroundImage from '@/public/nivel-parts-footer-top-bkg-680.jpg'
import EnclosuresAndCovers from '@/public/np-hp-featured-category-enclosures.jpg'
import Lighting from '@/public/np-hp-featured-category-lighting.jpg'
import Seating from '@/public/np-hp-featured-category-seating.jpg'
import TopsAndWindshields from '@/public/np-hp-featured-category-windshields.jpg'
import LargeBannerImage from '@/public/np_hp_twa_hero_bkg.jpg'

import type { GetServerSidePropsContext, GetStaticPropsContext } from 'next'

interface HomePageProps {
  page: any
}

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

Builder.registerComponent(CmsVehicleInnovation, {
  name: 'CmsVehicleInnovation',
  inputs: [
    {
      name: 'vehicleInnovationProps',
      type: 'object',
      defaultValue: {
        title: '50 Years of Specialty Vehicle Innovation',
        subtitle: 'Its What Drives Us',
        backgroundImageUrl: InnovationBackgroundImage,
        mobileViewLinkTitle: 'Learn more about us',
        mobileViewLinkUrl: '/',
        footerChildrens: [
          {
            icon: 'emoji_events',
            info: 'Our superior service sets us apart from the competition',
          },
          {
            icon: 'headset_mic',
            info: 'With the largest technical and customer support staff in the industry, we are here to help you, both before and after you place your order',
          },
          {
            icon: 'local_shipping',
            info: 'And we stock virtually everything we sell, ship 95% of our orders the same day, and deliver in 2 days.',
          },
        ],
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
          name: 'backgroundImageUrl',
          type: 'any',
        },
        {
          name: 'mobileViewLinkTitle',
          type: 'string',
        },
        {
          name: 'mobileViewLinkUrl',
          type: 'string',
        },
        {
          name: 'footerChildrens',
          type: 'list',
          subFields: [
            {
              name: 'icon',
              type: 'string',
            },
            {
              name: 'info',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})

Builder.registerComponent(LargeBanner, {
  name: 'LargeBanner',
  inputs: [
    {
      name: 'bannerProps',
      type: 'object',
      defaultValue: {
        title: 'New & Improved',
        subtitle1: 'Tire & Wheel',
        subtitle2: 'Builder',
        buttonTitle: 'Start Building',
        buttonUrl: '/category/TWB',
        backgroundImageUrl: LargeBannerImage,
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subtitle1',
          type: 'string',
        },
        {
          name: 'subtitle2',
          type: 'string',
        },
        {
          name: 'buttonTitle',
          type: 'string',
        },
        {
          name: 'buttonUrl',
          type: 'string',
        },
        {
          name: 'backgroundImageUrl',
          type: 'string',
        },
      ],
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

Builder.registerComponent(KiboHeroCarousel, {
  name: 'KiboHeroCarousel',
  inputs: [
    {
      name: 'carouselItem',
      type: 'list',
      defaultValue: [
        {
          imageUrl:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/655bb09f-e5f2-4027-8cf6-76d0363172d1',
          mobileImageUrl:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/655bb09f-e5f2-4027-8cf6-76d0363172d1',
          imageAlt: 'image Alt text',
          title: 'Check Off Your List Event',
          subtitle: 'Save up to 50%',
          description: 'Shop early to get your holiday gifts on time.',
          buttonText: 'Shop Holiday Items on Sale',
          buttonLink: 'https://',
        },
        {
          imageUrl:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/7b763015-5d76-4c3c-a5fd-6a14a476b56c',
          mobileImageUrl:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/7b763015-5d76-4c3c-a5fd-6a14a476b56c',
          imageAlt: 'image Alt text',
          title: 'Save upto 70%',
          subtitle: 'Check Off Your List Event',
          description: 'Shop early to get your holiday gifts on time.',
          buttonText: 'Shop Holiday Items on Sale',
          contentPosition: 'right',
          buttonLink: 'https://',
        },
      ],
      subFields: [
        {
          name: 'mobileImageUrl',
          type: 'file',
        },
        {
          name: 'mobileImageUrl',
          type: 'file',
        },
        {
          name: 'imageAlt',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subtitle',
          type: 'string',
        },
        {
          name: 'description',
          type: 'string',
        },
        {
          name: 'buttonText',
          type: 'string',
        },
        {
          name: 'buttonLink',
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
      type: 'KiboCommerceProductsList', // 'ShopifyCollectionHandle',
    },
  ],
})

Builder.registerComponent(Title, {
  name: 'Title',
  inputs: [
    {
      name: 'title',
      type: 'string',
    },
  ],
})

Builder.registerComponent(CmsHomePageProducts, {
  name: 'CmsHomePageProducts',
  inputs: [
    {
      name: 'recentlyViewed',
      type: 'object',
      defaultValue: {
        title: 'Recently Viewed and Related',
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'productCodes',
          type: 'KiboCommerceProductsList',
        },
      ],
    },
    {
      name: 'topSellings',
      type: 'object',
      defaultValue: {
        title: 'Top-selling products',
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'productCodes',
          type: 'KiboCommerceProductsList',
        },
      ],
    },
  ],
})

Builder.registerComponent(ContentTile, {
  name: 'ContentTile',
  inputs: [
    {
      name: 'largeTileProps',
      type: 'list',
      defaultValue: [
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/beaf1756-46ed-4ff5-bc20-49a2116b620e',
          title: 'Up to 50% off running gear',
          subtitle: 'Save on selected footwear, equipment and more',
          link1: { title: 'top deals', url: '/category/deals' },
          link2: { title: 'club deals', url: '/category/deals' },
          link3: { title: 'footwear deals', url: '/category/deals' },
        },
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/9a4155da-c985-44ef-9ac9-fa9cb3bde811',
          title: 'Up to 50% off Nike gear',
          subtitle: 'Save big on clothing and footwear from Nike',
          link1: { title: 'shop mens', url: '/category/deals' },
          link2: { title: 'shop womens', url: '/category/deals' },
          link3: { title: 'shop kids', url: '/category/deals' },
        },
      ],
      subFields: [
        {
          name: 'imgSource',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'link1',
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
          name: 'link2',
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
          name: 'link3',
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
      ],
    },
    {
      name: 'smallTileProps',
      type: 'list',
      defaultValue: [
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/8f3ec3c0-d72b-4369-bf0b-07f3849ad567',
          title: 'Dress for Any Occasion',
          subtitle: 'Dress your best and shine brighter than the sun',
          tileType: 'small',
          link1: { title: 'mens', url: '/category/deals' },
          link2: { title: 'womens', url: '/category/deals' },
          link3: { title: 'kids', url: '/category/deals' },
        },
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/4b2f2a04-765e-4d74-b83b-2df909cc48a6',
          title: 'Plenty to Play With',
          subtitle: 'Unwind this summer with deals on top gear',
          tileType: 'small',
          link1: { title: 'beach', url: '/category/deals' },
          link2: { title: 'bbq', url: '/category/deals' },
          link3: { title: 'hiking', url: '/category/deals' },
        },
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/d7127fd3-3656-4fea-bff7-47063154459c',
          title: 'Power to a Healthier You',
          subtitle: 'Clothing and gear for strength and cardio',
          tileType: 'small',
          link1: { title: 'strength training', url: '/category/deals' },
          link2: { title: 'cardio workout', url: '/category/deals' },
          link3: { title: 'fitness deals', url: '/category/deals' },
        },
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/ebdbfa1e-a3a1-4035-8aa3-e90f59a9478b',
          title: 'Get Your Golf On',
          subtitle: 'Tee up and bring your A-game',
          tileType: 'small',
          link1: { title: 'golf shirts', url: '/category/deals' },
          link2: { title: 'golf pants', url: '/category/deals' },
          link3: { title: 'golf footwear', url: '/category/deals' },
        },
      ],
      subFields: [
        {
          name: 'imgSource',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'link1',
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
          name: 'link2',
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
          name: 'link3',
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
      ],
    },
  ],
})

Builder.registerComponent(CmsFeaturedCategories, {
  name: 'CmsFeaturedCategories',
  inputs: [
    {
      name: 'featuredCategories',
      type: 'list',
      defaultValue: [
        {
          imgSource: EnclosuresAndCovers,
          title: 'Enclosers & Covers',
          buttonTitle: 'Shop Category',
          buttonUrl: '/category/PAA-EC',
        },
        {
          imgSource: Lighting,
          title: 'Lighting',
          buttonTitle: 'Shop Category',
          buttonUrl: '/category/LIG',
        },
        {
          imgSource: Seating,
          title: 'Seating',
          buttonTitle: 'Shop Category',
          buttonUrl: '/category/SEA',
        },
        {
          imgSource: TopsAndWindshields,
          title: 'Tops & Windshields',
          buttonTitle: 'Shop Category',
          buttonUrl: '/category/TAW',
        },
      ],
      subFields: [
        {
          name: 'imgSource',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'buttonTitle',
          type: 'string',
        },
        {
          name: 'buttonUrl',
          type: 'string',
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
    },
  ],
})

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale } = context
  const categoriesTree: any = await getCategoryTree()
  const { serverRuntimeConfig } = getConfig()

  const page = await builder
    .get('nivels-page', {
      userAttributes: {
        urlPath: '/',
      },
    })
    .toPromise()

  return {
    props: {
      page: page || null,
      categoriesTree,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: serverRuntimeConfig.revalidate,
  }
}

const Home: NextPageWithLayout<HomePageProps> = (props) => {
  const { page } = props
  return (
    <>
      <BuilderComponent model="nivels-page" content={page} />
    </>
  )
}

Home.getLayout = FullWidthLayout

export default Home
