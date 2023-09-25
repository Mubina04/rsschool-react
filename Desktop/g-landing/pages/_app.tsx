
import { Navbar, SiteFrame, Footer } from '@/components'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/i18n'
import { appWithTranslation } from 'next-i18next'

import ru from '../i18n/ru.json'
import uz from '../i18n/uz.json'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

const messages = {
  ru,
  uz
}

function getDirection(locale: string) {
  return locale
}

function App({ Component, pageProps }: AppProps) {

  const { locale } = useRouter()

  return (
    <SiteFrame>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Navbar />
        <Component {...pageProps} dir={getDirection(locale)} />
        <Footer />
      </IntlProvider>
    </SiteFrame>
  )
}
export default appWithTranslation(App)