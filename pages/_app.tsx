import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Noto_Serif } from '@next/font/google'

const notoSerif = Noto_Serif({
  weight: ['400', '700'],
  subsets: ['latin']
});

function MyApp({ Component, pageProps }: AppProps) {
  return <main className={notoSerif.className}>
    <Component {...pageProps} />
  </main>
}

export default appWithTranslation(MyApp);
