import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./ThemeButton.css";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`theme-container ${theme}`}>
      <h2>
        {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeButton;