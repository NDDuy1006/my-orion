import store from '@/store';
import EmtyLayout from '@/layouts/EmtyLayout';
import '../styles/index.scss';
import { AppPropsWithLayout } from '@/types/layoutType';
import { Provider } from 'react-redux';
import { defaultTheme } from '@/config';
import { ConfigProvider } from 'antd';
import SEO from '../config/nextSEO';

import { Poppins } from 'next/font/google'
import { DefaultSeo } from 'next-seo';
const poppins = Poppins({ weight: ["100", "300", "400", "500", "700", "900"], style: ['normal', 'italic'], subsets: ["latin"] })


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmtyLayout;

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
        <Provider store={store}>
          <ConfigProvider theme={defaultTheme}>
            <Layout className={poppins.className}>
              <DefaultSeo {...SEO} />
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
        </Provider>
    </>
  );
}
