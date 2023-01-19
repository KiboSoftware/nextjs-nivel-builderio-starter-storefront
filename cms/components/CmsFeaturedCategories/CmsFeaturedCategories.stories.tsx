import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CmsFeaturedCategories from './CmsFeaturedCategories'
import EnclosuresAndCovers from '@/public/np-hp-featured-category-enclosures.jpg'
import Lighting from '@/public/np-hp-featured-category-lighting.jpg'
import Seating from '@/public/np-hp-featured-category-seating.jpg'
import TopsAndWindshields from '@/public/np-hp-featured-category-windshields.jpg'

export default {
  title: 'Cms/CmsFeaturedCategories',
  component: CmsFeaturedCategories,
} as ComponentMeta<typeof CmsFeaturedCategories>

const Template: ComponentStory<typeof CmsFeaturedCategories> = (args) => (
  <CmsFeaturedCategories {...args} />
)

export const Common = Template.bind({})

Common.args = {
  title: 'Featued Categories',
  featuredCategories: [
    {
      imgSource: EnclosuresAndCovers,
      title: 'Enclosers & Covers',
      buttonTitle: 'Shop Category',
      buttonUrl: '/category/PAA',
    },
    {
      imgSource: Lighting,
      title: 'Lighting',
      buttonTitle: 'Shop Category',
      buttonUrl: '/category/PAA',
    },
    {
      imgSource: Seating,
      title: 'Seating',
      buttonTitle: 'Shop Category',
      buttonUrl: '/category/PAA',
    },
    {
      imgSource: TopsAndWindshields,
      title: 'Tops & Windshields',
      buttonTitle: 'Shop Category',
      buttonUrl: '/category/PAA',
    },
  ],
}
