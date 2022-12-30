import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import PageProviderWithMui from "./page-provider-with-mui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // theme provider of next.js will persist the theme to local storage
    <ThemeProvider>
      {/* <ThemeProviderMui theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProviderMui> */}
      <PageProviderWithMui>
        <Component {...pageProps} />
      </PageProviderWithMui>
    </ThemeProvider>
  );
}
