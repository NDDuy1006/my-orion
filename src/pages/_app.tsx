import EmtyLayout from '@/layouts/EmtyLayout'
import '@/styles/index.scss'
import { AppPropsWithLayout } from '@/types/layoutType'

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmtyLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
