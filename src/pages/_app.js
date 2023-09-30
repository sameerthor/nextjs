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
    <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-141223995-1" />
    <Script strategy="lazyOnload" id="google-analytics">
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
