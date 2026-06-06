import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
