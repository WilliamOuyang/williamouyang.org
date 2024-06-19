import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";
import Whitepaper from "./pages/Whitepaper";
import Vault from "./pages/Vault";
import Storage from "./pages/Storage";
import Schedule from "./pages/Schedule";
import Dashboarddb from "./pages/Dashboard";

import Docs from "./pages/Docs";
import Test from "./pages/Test";


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/dashboard" element={<Dashboarddb />} />
          <Route path="/test" element={<Test />} />
          <Route path="/docs" element={<Docs />} />
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
