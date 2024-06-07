import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@/components/theme-provider";
import '../globals.css'
import Whitepaper from "./pages/Whitepaper";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
