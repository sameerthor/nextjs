import Head from 'next/head'
import { GoogleAnalytics } from "nextjs-google-analytics";
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/global.css'
import '../../public/css/font-awesome/css/font-awesome.min.css';
import Script from 'next/script'
import { useEffect } from "react"
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['vietnamese'] })

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <>
    <style jsx global>{`
    html {
      font-family: ${inter.style.fontFamily};
    }
  `}</style>      <GoogleAnalytics gaMeasurementId='UA-141223995-1' strategy="lazyOnload" />
    <Component {...pageProps} /></>
}
