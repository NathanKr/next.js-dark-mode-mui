import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeUpdater = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if(!mounted){
    return null;
  }

  


  return <div></div>;
};

export default ThemeUpdater;
