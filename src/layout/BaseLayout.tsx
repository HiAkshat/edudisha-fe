import { ThemeProvider } from "@/components/theme-provider";
import SideNav from "./SideNav/SideNav";
import React, { PropsWithChildren } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CalendarIcon, SearchIcon, SettingsIcon } from "lucide-react";
import { InboxIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";

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
      <div className="bg-[var(--color-primary-200)] dark:bg-[var(--color-primary-900)]">
        <SidebarProvider defaultOpen={false} open={isSidebarHovered}>
          <SidebarTrigger />
          <SideNav items={items} setIsSidebarHovered={setIsSidebarHovered} />
          <div className="w-full m-2 ml-[-20px] bg-background rounded-md p-2">
            {children}
          </div>
        </SidebarProvider>
      </div>
    </ThemeProvider>
  );
};

export default BaseLayout;
