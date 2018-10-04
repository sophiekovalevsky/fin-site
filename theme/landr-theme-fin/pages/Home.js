import React from 'react';
import { getSiteProps } from '@resin.io/react-static';
import Jumbotron from '../components/Jumbotron';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import DeviceMap from '../components/DeviceMap';
import Motivation from '../components/Motivation';
import NeedHelp from '../components/NeedHelp';
import get from 'lodash/get';

export default getSiteProps(props => {
	const getter = key => get(props, key);
	return (
		<div>
			<Jumbotron {...props} />

			{getter('settings.features') && <Features {...props} />}
			<DeviceMap />
			{getter('settings.motivation') && <Motivation {...props} />}
			{getter('faqs[0]') && <FAQ faqs={props.faqs} />}
			<NeedHelp />
		</div>
	);
});
