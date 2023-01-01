import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import PageProviderWithMui from "../src/page-provider-with-mui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // theme provider of next.js will persist the theme to local storage
    <ThemeProvider>
      <PageProviderWithMui>
        <Component {...pageProps} />
      </PageProviderWithMui>
    </ThemeProvider>
  );
}
