import { AnimatePresence } from 'framer-motion'

import '../styles/global.scss'

export default function App({ Component, pageProps, router }) {
    return <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    
  }
  