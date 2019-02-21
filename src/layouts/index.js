import React from 'react';
import Helmet from 'react-helmet';

import Fonts from '../components/Fonts';

const PageWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Alexander Madyankin"
      meta={[
        {
          name: 'description',
          content: 'Alexander Madyankin. Frontend developer',
        },
      ]}
    />

    <Fonts />

    <div>{children()}</div>
  </div>
);

export default PageWrapper;
