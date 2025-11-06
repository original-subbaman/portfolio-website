import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { useState, useEffect } from "react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 hover:scale-105"
    >
      {theme === "dark" ? (
        <LuMoon className="h-5 w-5" />
      ) : (
        <LuSun className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
