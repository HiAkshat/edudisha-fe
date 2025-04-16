import { ThemeProvider } from "@/components/theme-provider";
import SideNav from "./SideNav/SideNav";
import React, { PropsWithChildren } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import FileIcon from "@/components/atoms/icons/FileIcon";

const items = [
  {
    title: "Home",
    url: "#",
    // icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    // icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    // icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    // icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    // icon: Settings,
  },
]

const BaseLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const [isSidebarHovered, setIsSidebarHovered] = React.useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false} open={isSidebarHovered}>
        <SidebarTrigger />
        <SideNav items={items} setIsSidebarHovered={setIsSidebarHovered} />
        <FileIcon />

        {children}
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default BaseLayout;
