import store from '@/store';
import EmtyLayout from '@/layouts/EmtyLayout';
import '../styles/index.scss';
import { AppPropsWithLayout } from '@/types/layoutType';
import { Provider } from 'react-redux';
import { defaultTheme } from '@/config';
import { ConfigProvider } from 'antd';

import { Poppins } from 'next/font/google'
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
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
        </Provider>
    </>
  );
}
