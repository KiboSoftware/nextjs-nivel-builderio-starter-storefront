import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CmsVehicleInnovation from './CmsVehicleInnovation'
import InnovationBackgroundImage from '@/public/nivel-parts-footer-top-bkg-680.jpg'

export default {
  title: 'Cms/CmsVehicleInnovation',
  component: CmsVehicleInnovation,
} as ComponentMeta<typeof CmsVehicleInnovation>

const Template: ComponentStory<typeof CmsVehicleInnovation> = (args) => (
  <CmsVehicleInnovation {...args} />
)

export const Common = Template.bind({})

const vehicleInnovationProps = {
  title: '50 Years of Specialty Vehicle Innovation',
  subtitle: "It's What Drives Us",
  backgroundImageUrl: InnovationBackgroundImage,
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
}

Common.args = {
  vehicleInnovationProps,
}
