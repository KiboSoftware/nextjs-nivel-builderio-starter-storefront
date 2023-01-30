import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CmsFeaturedCategories from './CmsFeaturedCategories'
import { cmsFeaturedCategoriesMock } from '@/__mocks__/stories'

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
  featuredCategories: cmsFeaturedCategoriesMock,
}
