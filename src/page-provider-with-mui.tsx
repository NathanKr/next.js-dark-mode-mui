import { FC, ReactNode, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const PageProviderWithMui: FC<{ children: ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  function toggleTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={theme == "dark" ? darkTheme : lightTheme}>
      <h3>click the icon to toggle light\dark mode</h3>
      <span onClick={toggleTheme}>
        {theme == "dark" ? <MdLightMode /> : <MdDarkMode />}
      </span>
      {/* it is not working without CssBaseline */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default PageProviderWithMui;