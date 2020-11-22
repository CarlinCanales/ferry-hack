import '@reach/dialog/styles.css';

import { AppProps } from 'next/app';
import React from 'react';

const MyApp = (props: AppProps): JSX.Element => {
  // NextJS types the `pageProps` as `any`.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
