
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
    
        <button className="text-left" onClick={() => setTheme("light")}>
          Light
        </button>
        <button className="text-left" onClick={() => setTheme("dark")}>
          Dark
        </button>
        <button className="text-left" onClick={() => setTheme("system")}>
          System
        </button>
   

    </>
  )
}
