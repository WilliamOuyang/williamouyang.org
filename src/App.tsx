import "../globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import Whitepaper from "./pages/Whitepaper";
import Vault from "./pages/Vault";
import Storage from "./pages/Storage";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import Faq from "./pages/Faq";
import Donate from "./pages/Donate";
import Sitemap from "./pages/Sitemap";

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
          <Route path="/test" element={<Test />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/sitemap" element={<Sitemap />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
