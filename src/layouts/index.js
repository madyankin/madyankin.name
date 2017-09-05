import React from 'react';
import Helmet from 'react-helmet';

import Analytics from '../components/Analytics';
import Fonts from '../components/Fonts';

const PageWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Alexander Madyankin"
      meta={[
        { name: 'description', content: 'Alexander Madyankin. Frontend developer' },
      ]}
    />

    <Fonts />

    <div>{children()}</div>

    <Analytics />
  </div>
);

export default PageWrapper;
