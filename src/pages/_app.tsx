import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HeaderContextProvider } from "../context/HeaderContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderContextProvider>
      <Component {...pageProps} />
    </HeaderContextProvider>
  );
}

export default MyApp;
