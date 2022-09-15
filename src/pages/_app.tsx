import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import Layout from 'components/Layout'
// import { meta } from 'components/meta'

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter()
  // const { title, description } = meta.find((_) => {
  //   _.route === router.route ?? {
  //     title: '',
  //     description: '',
  //   }
  // })
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1.0, user-scalable=no"
          />
          {/* <title>{title}</title>
        <meta name="description" content={description} /> */}
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
