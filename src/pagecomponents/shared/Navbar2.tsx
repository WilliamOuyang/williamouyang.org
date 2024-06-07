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
import NavResources from "./NavResources";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { EvervaultCard } from "@/components/ui/evervault-card";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        {/* <Resourcex/> */}

        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Schedule"
              href="https://localhost:5174/whitepaper"
              src="https://google.com"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Dashboard"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Vault"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="White paper"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
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
