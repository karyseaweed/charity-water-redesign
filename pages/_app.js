import AOS from 'aos';
import 'aos/dist/aos.css';
import '../scripts/gradient.js';
import '../styles/globals.css';
import { useEffect } from 'react';
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
