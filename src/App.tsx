import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@/components/theme-provider";
import '../globals.css'
import Whitepaper from "./pages/Whitepaper";
import Vault from "./pages/Vault";
import Storage from "./pages/Storage";
import Code from "./pages/Code";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/code" element={<Code />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
