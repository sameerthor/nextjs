import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/global.css'
import Script from 'next/script'
import { useEffect } from "react"
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['vietnamese'] })

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" defer referrerPolicy="no-referrer" />
    </Head>
    <Script src="https://www.googletagmanager.com/gtag/js?id=UA-141223995-1" />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-141223995-1');
        `}
    </Script>
    <style jsx global>{`
    html {
      font-family: ${inter.style.fontFamily};
    }
  `}</style><Component {...pageProps} /></>
}
