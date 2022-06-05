import { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { MUItheme } from "../theme/theme";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import emotionCache from "../theme/emotionCache";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache()}>
      <MUIThemeProvider theme={MUItheme}>
        <Component {...pageProps} />
      </MUIThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
