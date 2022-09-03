import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import Layout from 'components/layout'
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
      <Head>
        {/* <title>{title}</title>
        <meta name="description" content={description} /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
