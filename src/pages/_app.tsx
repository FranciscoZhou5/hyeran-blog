import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />

      <Component {...pageProps} />

      <AppFooter />
    </>
  );
}

export default MyApp;
