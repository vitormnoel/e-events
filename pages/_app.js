import Layout from '../src/components/layout/layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps}/>
    </Layout>
}