import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globals'

globalStyles()
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
