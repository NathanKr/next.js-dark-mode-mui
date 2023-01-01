import { useTheme } from "next-themes";
import ToggleTheme from "../src/toggle-theme";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <ToggleTheme />
      <p>the current theme is: {theme}</p>
    </>
  );
}
