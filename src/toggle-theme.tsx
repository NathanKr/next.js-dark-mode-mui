import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  return (
    <>
      <h3>click the icon to toggle light\dark mode</h3>
      <span onClick={toggleTheme}>
        {theme == "dark" ? <MdLightMode /> : <MdDarkMode />}
      </span>
    </>
  );
};

export default ToggleTheme;
