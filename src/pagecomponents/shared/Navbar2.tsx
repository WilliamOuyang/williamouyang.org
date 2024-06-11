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
import { AreaChart, CalendarDays, Database, File, FileText, Home, Landmark } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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

        <Link to="/" onMouseEnter={() => setActive(null)}>
          <Home />
        </Link>
        <Link to="/docs" onMouseEnter={() => setActive(null)}>
          <FileText />
        </Link>
        {/* 
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm text-left">
            <Link to="/docs">Docs</Link>
            
          </div>
        </MenuItem> */}
        <MenuItem
          setActive={setActive}
          active={active}
          item=""
          toggle={false}
          resources={true}
        >
          <div className="flex flex-col space-y-4 text-sm text-left">
           <u className="select-none"><strong className="flex mb-0">RESOURCES </strong></u>


            <Link to="/schedule">
              <div style={{ display: "flex", alignItems: "center" }} className="select-none">
              <CalendarDays className="mr-2" />
                Schedule
              </div>
            </Link>
            <Link to="/dashboard">
              <div style={{ display: "flex", alignItems: "center" }} className="select-none">
              <AreaChart className="mr-2" />
                Dashboard
              </div>
            </Link>
            <Link to="/vault">
              <div style={{ display: "flex", alignItems: "center" }} className="select-none">
              <Landmark  className="mr-2" />
                Vault
              </div>
            </Link>
            <Link to="/storage">
              <div style={{ display: "flex", alignItems: "center" }} className="select-none">
              <Database className="mr-2" />
                Storage
              </div>
            </Link>
            <Link to="/whitepaper">
              <div style={{ display: "flex", alignItems: "center" }} className="select-none">
                <File className="mr-2" />
                White paper
              </div>
            </Link>
          </div>
          {/* <div className="p-0" style={{minWidth:'800px', minHeight:'300px'}}>
            y
          </div> */}
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item=" "
          toggle={true}
          resources={false}
        >
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
