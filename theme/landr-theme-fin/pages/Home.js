import React from 'react'
import { getSiteProps } from '@resin.io/react-static'
import Jumbotron from '../components/Jumbotron'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Features from '../components/Features'
import DeviceMap from '../components/DeviceMap'
import get from 'lodash/get'

export default getSiteProps(props => {
  const getter = key => get(props, key)
  return (
    <div>
      <Jumbotron {...props} />
      {getter('settings.features') && <Features {...props} />}
			<DeviceMap />
      {getter('settings.testimonials') && <Testimonials items={props.settings.testimonials} />}
      {getter('faqs[0]') && <FAQ faqs={props.faqs} />}
    </div>
  )
})
