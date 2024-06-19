import { useTheme } from "@/components/theme-provider";
import { CloudMoon, CloudSun, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";

export function ModeToggle() {

  const [themex, setThemex] = useState<string>("default")
  const { setTheme } = useTheme();

  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // setThemex(systemTheme === "light");

  return (
    <>
    <DropdownMenu>
  <DropdownMenuTrigger>
    {
      themex==="default" ? 
      <Sun className="mr-2" />:
      <Moon className="mr-2" />
    }
 

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Theme</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem> <button className="text-left" onClick={() => {setTheme("light"); setThemex("default")}}>
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
      </button></DropdownMenuItem>
    <DropdownMenuItem> <button className="text-left" onClick={() => {setTheme("dark"); setThemex("dark")}}>
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
      </button></DropdownMenuItem>
    <DropdownMenuItem>
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
      </button></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

     
     
    </>
  );
}
