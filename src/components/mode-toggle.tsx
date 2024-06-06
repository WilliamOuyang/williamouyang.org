import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme("light")}>Light</button>

      <button onClick={() => setTheme("dark")}>Dark</button>

      <button onClick={() => setTheme("system")}>System</button>
    </>
  );
}
