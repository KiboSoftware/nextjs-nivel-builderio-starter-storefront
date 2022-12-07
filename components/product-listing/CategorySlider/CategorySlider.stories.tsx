import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CategorySlider from './CategorySlider'

export default {
  title: 'product-listing/CategorySlider',
  component: CategorySlider,
  argTypes: { onChange: { action: 'onChange' } },
} as ComponentMeta<typeof CategorySlider>

const Template: ComponentStory<typeof CategorySlider> = (args) => <CategorySlider {...args} />

export const Common = Template.bind({})
Common.args = {
  categoryCodes: ['171', '161', '163'],
}
