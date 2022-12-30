import { useTheme } from "next-themes";

export default function Home() {
  const { theme} = useTheme();

  return (
    <>
      <p>the current theme is: {theme}</p>
    </>
  );
}
