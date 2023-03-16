import React from 'react';

import { Layout } from '../../components';
import '../styles/globals.css'

function myApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps } />
    </Layout>
  )
}

export default myApp
