"use client";
import { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
  // Resourcex,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import NavResources from "./NavResources";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        <Link to="/">Home</Link>

        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Releases</HoveredLink>
            <HoveredLink href="/interface-design">Timeline</HoveredLink>
            <Link to="/seo">Profile</Link>
            <Link to="/whitepaper">White paper</Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="p-0" style={{minWidth:'800px', minHeight:'300px'}}>
            <NavResources/>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Theme">
          <div className="flex flex-col space-y-4 text-sm">
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
