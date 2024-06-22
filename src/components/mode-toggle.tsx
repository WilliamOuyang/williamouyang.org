import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function ModeToggle() {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); 

  const { setTheme } = useTheme();

  function toggle() {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode); 
  }
  
  return (
    <button onClick={toggle}>
      {isDarkMode ? <Moon className="mr-2" /> : <Sun className="mr-2" />}
    </button>
  );
}