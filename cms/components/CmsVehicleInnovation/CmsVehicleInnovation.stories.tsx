import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CmsVehicleInnovation from './CmsVehicleInnovation'
import InnovationBackgroundImage from '@/public/nivel-parts-footer-top-bkg-680.jpg'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

export default {
  title: 'Cms/CmsVehicleInnovation',
  component: CmsVehicleInnovation,
} as ComponentMeta<typeof CmsVehicleInnovation>

const Template: ComponentStory<typeof CmsVehicleInnovation> = (args) => (
  <CmsVehicleInnovation {...args} />
)

export const Common = Template.bind({})

const vehicleInnocationProps = {
  title: '50 Years of Specialty Vehicle Innovation',
  subtitle: "It's What Drives Us",
  backgroundImageUrl: InnovationBackgroundImage,
  footerChildrens: [
    {
      // icon: EmojiEventsIcon,
      info: 'Our superior service sets us apart from the competition',
    },
    {
      // icon: HeadsetMicIcon,
      info: 'With the largest technical and customer support staff in the industry, we are here to help you, both before and after you place your order',
    },
    {
      // icon: LocalShippingIcon,
      info: 'And we stock virtually everything we sell, ship 95% of our orders the same day, and deliver in 2 days.',
    },
  ],
}

Common.args = {
  vehicleInnocationProps: vehicleInnocationProps,
}
