import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CmsFeaturedCategories from './CmsFeaturedCategories'

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
      imgSource: 'https://cdn-sb.mozu.com/26507-m1/cms/files/beaf1756-46ed-4ff5-bc20-49a2116b620e',
      title: 'Enclosers & Covers',
      buttonTitle: 'Shop Category',
      buttonUrl: '/category/PAA',
    },
    {
      imgSource: 'https://cdn-sb.mozu.com/26507-m1/cms/files/9a4155da-c985-44ef-9ac9-fa9cb3bde811',
      title: 'Lighting',
      buttonTitle: 'Shop Category',
      buttonUrl: '/category/PAA',
    },
    {
      imgSource: 'https://cdn-sb.mozu.com/26507-m1/cms/files/9a4155da-c985-44ef-9ac9-fa9cb3bde811',
      title: 'Seating',
      buttonTitle: 'Shop Category',
      buttonUrl: '/category/PAA',
    },
    {
      imgSource: 'https://cdn-sb.mozu.com/26507-m1/cms/files/9a4155da-c985-44ef-9ac9-fa9cb3bde811',
      title: 'Tops & Windshields',
      buttonTitle: 'Shop Category',
      buttonUrl: '/category/PAA',
    },
  ],
}
