import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.configure({ showSpinner: false }).start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }, [router]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer limit={4} />
    </>
  )
}
