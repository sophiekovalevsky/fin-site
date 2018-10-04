import React from 'react';
import { getSiteProps } from '@resin.io/react-static';

import DocsWrapper from '../pages/Docs';
import Doc from '../components/Doc';

export default getSiteProps(({ docs, location }) => {
	const key = location.pathname.replace('/docs/', '');
	const document = <Doc {...docs.find(({ slug }) => slug === key)} />;
	return <DocsWrapper>{document}</DocsWrapper>;
});
