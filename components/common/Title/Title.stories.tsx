import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Title from './Title'

export default {
  title: 'Common/Title',
  component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Common = Template.bind({})
Common.args = {
  title: 'Our Products',
}
