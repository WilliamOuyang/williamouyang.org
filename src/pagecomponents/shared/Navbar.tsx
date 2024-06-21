import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import {
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

function Navbar() {

  return (
    <div className="fixed top-2 inset-x-0 max-w-2xl mx-auto z-50">
      <nav className="relative rounded-full border bg-card shadow-input flex justify-center space-x-4 px-8 py-6 drop-shadow-md">
        <Link to="/">
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

        <Link to="/docs">
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

      <Link to={""}>
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
        </Link>

        <Link to={""}>
        <ModeToggle />
        </Link>
        </nav>
    </div>
  );
}

const Navbar2 = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar/>
    </div>
  );
};
export default Navbar2;
