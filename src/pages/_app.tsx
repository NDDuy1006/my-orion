import store from '@/store'
import EmtyLayout from '@/layouts/EmtyLayout'
import '@/styles/index.scss'
import { AppPropsWithLayout } from '@/types/layoutType'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmtyLayout

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
