"use client";
import { useState } from "react";
import { Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import {
  AreaChart,
  CalendarDays,
  Database,
  File,
  FileText,
  FolderOpen,
  Home,
  Landmark,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link to="/" onMouseEnter={() => setActive(null)}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Home />
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        <Link to="/docs" onMouseEnter={() => setActive(null)}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <FileText />
              </TooltipTrigger>
              <TooltipContent>
                <p>Docs</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        {/* <MenuItem
          setActive={setActive}
          active={active}
          item=""
          toggle={false}
          resources={true}
        >
        
        </MenuItem> */}

      
        <DropdownMenu>
          <DropdownMenuTrigger><FolderOpen /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Resources</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/schedule">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="select-none "
                >
                  <CalendarDays className="mr-2" />
                  Schedule
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem> <Link to="/dashboard">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="select-none "
              >
                <AreaChart className="mr-2" />
                Dashboard
              </div>
            </Link></DropdownMenuItem>
            <DropdownMenuItem><Link to="/vault">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="select-none "
              >
                <Landmark className="mr-2" />
                Vault
              </div>
            </Link></DropdownMenuItem>
            <DropdownMenuItem> <Link to="/storage">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="select-none "
              >
                <Database className="mr-2" />
                Storage
              </div>
            </Link></DropdownMenuItem>
            <DropdownMenuItem>  <Link to="/whitepaper">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="select-none "
              >
                <File className="mr-2" />
                White paper
              </div>
            </Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
        
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
