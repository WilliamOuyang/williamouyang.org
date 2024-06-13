import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, SunMoon } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <button className="text-left" onClick={() => setTheme("light")}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            
          }}
          className="select-none "
        >
          <Sun className="mr-2" />
          Light
        </div>
      </button>
      <button className="text-left" onClick={() => setTheme("dark")}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            
          }}
          className="select-none "
        >
          <Moon className="mr-2" />
          Dark
        </div>
      </button>
      <button className="text-left" onClick={() => setTheme("system")}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            
          }}
          className="select-none "
        >
          <SunMoon className="mr-2" />
          System
        </div>
      </button>
    </>
  );
}
