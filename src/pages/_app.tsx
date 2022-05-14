import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HeaderContextProvider } from "../context/HeaderContext";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderContextProvider>
      <AppHeader />

      <Component {...pageProps} />

      <AppFooter />
    </HeaderContextProvider>
  );
}

export default MyApp;
