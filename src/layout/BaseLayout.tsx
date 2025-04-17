import { ThemeProvider } from "@/components/theme-provider";
import SideNav from "./SideNav/SideNav";
import React, { PropsWithChildren } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CalendarIcon, SearchIcon, SettingsIcon } from "lucide-react";
import { InboxIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";
import Navbar from "./Navbar/Navbar";

const items = [
  {
    title: "Home",
    url: "#",
    icon: HomeIcon,
  },
  {
    title: "Inbox",
    url: "#",
    icon: InboxIcon,
  },
  {
    title: "Calendar",
    url: "#",
    icon: CalendarIcon,
  },
  {
    title: "Search",
    url: "#",
    icon: SearchIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: SettingsIcon,
  },
]

const BaseLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const [isSidebarHovered, setIsSidebarHovered] = React.useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-[var(--color-error-50)] dark:bg-gray-950">
        <SidebarProvider className="flex gap-3" defaultOpen={false} open={isSidebarHovered}>
          <SideNav items={items} setIsSidebarHovered={setIsSidebarHovered} />
          
            
          <div className="flex flex-col gap-2 w-full p-2">

            <Navbar />
            {children}
          </div>
        </SidebarProvider>
      </div>
    </ThemeProvider>
  );
};

export default BaseLayout;
