"use client";
import { useState } from "react";
import {
  // HoveredLink,
  Menu,
  MenuItem,
  // ProductItem,
  // Resourcex,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import { FileText, Home } from "lucide-react";
// import NavResources from "./NavResources";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        
        {/* <MenuItem setActive={setActive} active={active} item="Home">
        <Link to="/">Home</Link>
        </MenuItem> */}

<Link to="/" onMouseEnter={() => setActive(null)}><Home /></Link>
<Link to="/docs" onMouseEnter={() => setActive(null)}><FileText /></Link>
{/* 
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm text-left">
            <Link to="/docs">Docs</Link>
            
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="" toggle={false} resources = {true}>
        <div className="flex flex-col space-y-4 text-sm text-left">
            <Link to="/schedule">Schedule</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/vault">Vault</Link>
            <Link to="/storage">Storage</Link>
            <Link to="/whitepaper">White paper</Link>
          </div>
          {/* <div className="p-0" style={{minWidth:'800px', minHeight:'300px'}}>
            y
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item=" " toggle={true} resources={false}>
          <div className="flex flex-col text-sm p-0 space-y-4">
            <ModeToggle />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

const Navbar2 = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
};
export default Navbar2;
