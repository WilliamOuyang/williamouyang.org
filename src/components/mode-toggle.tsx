import { useTheme } from "@/components/theme-provider";
import { CloudMoon, CloudSun, Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';


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
          {systemTheme=="light"? 
        <CloudSun className="mr-2"/>  :
        <CloudMoon className="mr-2"/>
        }
          System
        </div>
      </button>
    </>
  );
}
