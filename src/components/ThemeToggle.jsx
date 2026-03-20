import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    } else {
      setIsLightMode(false);
      document.documentElement.classList.remove("light");
    }
  }, []);

  const handleToggle = () => {
    const newIsLightMode = !isLightMode;
    setIsLightMode(newIsLightMode);

    if (newIsLightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "cursor-pointer p-2 rounded-full transition-all duration-300 hover:bg-secondary/50",
        "focus:outline-hidden"
      )}
    >
      {isLightMode ? (
        <Moon className="h-6 w-6 text-blue-900" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-300" />
      )}
    </button>
  );
};
