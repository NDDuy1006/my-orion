import store from '@/store';
import EmtyLayout from '@/layouts/EmtyLayout';
import '../styles/index.scss';
import { AppPropsWithLayout } from '@/types/layoutType';
import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd';
import instance from '@/config/theme/defaultTheme';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmtyLayout;

  return (
    <>
      <Provider store={store}>
        <ConfigProvider theme={instance}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ConfigProvider>
      </Provider>
    </>
  );
}
