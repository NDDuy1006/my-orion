import store from '@/store';
import EmtyLayout from '@/layouts/EmtyLayout';
import '../styles/index.scss';
import { AppPropsWithLayout } from '@/types/layoutType';
import { Provider } from 'react-redux';
import { SWRConfigX, defaultTheme } from '@/config';
import { ConfigProvider } from 'antd';
import SEO from '@/config/nextSEO';

import { Poppins, Lora } from 'next/font/google';
import { DefaultSeo } from 'next-seo';
const lora = Lora({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})
const poppins = Poppins({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmtyLayout;

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${poppins.style.fontFamily, lora.style.fontFamily};
                }
            `}</style>
            <Provider store={store}>
                <ConfigProvider theme={defaultTheme}>
                    <SWRConfigX>
                        <Layout className={poppins.className}>
                            <DefaultSeo {...SEO} />
                            <Component {...pageProps} />
                        </Layout>
                    </SWRConfigX>
                </ConfigProvider>
            </Provider>
        </>
    );
}
