import { FC, ReactNode, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../src/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";

const PageProviderWithMui: FC<{ children: ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme == "dark" ? darkTheme : lightTheme}>
      <button onClick={() => setTheme("light")}>set light</button>
      <button onClick={() => setTheme("dark")}>set dark</button>
      {/* it is not working without CssBaseline */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default PageProviderWithMui;
