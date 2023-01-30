import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CmsVehicleInnovation from './CmsVehicleInnovation'
import { cmsVehicleInnovationMock } from '@/__mocks__/stories'

export default {
  title: 'Cms/CmsVehicleInnovation',
  component: CmsVehicleInnovation,
} as ComponentMeta<typeof CmsVehicleInnovation>

const Template: ComponentStory<typeof CmsVehicleInnovation> = (args) => (
  <CmsVehicleInnovation {...args} />
)

export const Common = Template.bind({})

Common.args = {
  vehicleInnovationProps: cmsVehicleInnovationMock,
}
