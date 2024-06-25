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

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/en/" element={<Home />} />
          <Route path="/en/whitepaper" element={<Whitepaper />} />
          <Route path="/en/vault" element={<Vault />} />
          <Route path="/en/storage" element={<Storage />} />
          <Route path="/en/schedule" element={<Schedule />} />
          <Route path="/en/test" element={<Test />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
